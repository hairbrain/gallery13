/* global module require */
/**
* Image.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var path = require('path');
var slug = require('slug');
var promise = require('bluebird');
//var skipperS3 	= require('skipper-s3');

var amazon = StorageService.create('amazon', {
  provider: {
    accessKeyId: process.env.S3_KEY,
    secretAccessKey: process.env.S3_SECRET
  }
});

  function getArtistSlug(artistid) {
    return Artist.findOne(artistid)
      .then(function(artist) {
        sails.log.debug('returned artist:');
        //sails.log.debug(artist);
        var artistSlug = path.join('images/artists/', artist.slug);
        //sails.log.debug('artistSlug: ', artistSlug);
        return artistSlug;
      })
      .catch(function(err) {
        sails.log.debug('caught error getting artist slug');
        sails.log.error(err);
        return '';
      });
  }

  function uploadS3(artistSlug, image, values) {

    sails.log.debug('entered uploadS3');

    var ext = path.extname(values.title);
    var filename = path.basename(values.title, ext);
    var name = path.basename(slug(filename));
    var imageKey = path.join(artistSlug, name + ext);

    sails.log.debug('S3 image key: ', imageKey);

    return amazon
      .upload(image, process.env.S3_BUCKET + ':' + imageKey)
      .then(function(data) {
        sails.log(data);

        var url = 'https://' + process.env.S3_BUCKET + '.' + path.join('s3.amazonaws.com/', imageKey);
        sails.log.info('uploaded image to S3: ', url);
        return url;
      })
      .catch(sails.log.error);
  }


module.exports = {
  attributes : {
    path          : { type: 'text' },
    title         : { type: 'string' },
    description   : { type: 'string' },
    slug          : { type: 'string', index: true },
    order         : { type: 'float', index: true },
    artist        : { model: 'artist', index: true },
    isArtistImage : function () {
      return !!this.artist;
    }
  },
  // Lifecycle Callbacks
  afterValidate: function (values, next) {
    "use strict";
    // Create slug from image title for url
    if (values.title !== null && values.title.length) {
      var fileInfo = path.parse(values.title);
      values.slug = slug(path.basename(fileInfo.name, fileInfo.ext), {lower: true});
      sails.log.debug('new image slug: ', values.slug);
    } else {
      //todo: generate default [and unique] value for image records
      values.slug = 'new-image';
    }

    //here we check the path field to see if it is set to a filepicker.io url
    //if so, upload the linked file to S3 and update the values.path value to the new url
    if (values.path.indexOf('filepicker.io') > -1) {

      /*
          Here we have a image that's been uploaded from filepicker.io
          Because we dont want to use filepicker as our CDN, we're going to
          download the image in memory and upload it to AWS S3 then if successful update our image.path
       */

      sails.log.debug('found filepicker.io path on image');
      //sails.log.debug('values are: ', values);

      //here we need to load the image into a buffer from the url we have
      //http://stackoverflow.com/questions/18264346/how-to-load-an-image-from-url-into-buffer-in-nodejs

      var request = require('request').defaults({ encoding: null });
      request
      request.get(values.path, function (err, res, body) {
        if(err) {
          sails.log.debug('caught err calling getimage:', err);
          next();
          return;
        }

        return getArtistSlug(values.artist)
          .then(function(artistSlug) {
            //sails.log.debug('getArtistSlug returned', artistSlug);
            //sails.log.debug('getimage response body2: ', body);
            return uploadS3(artistSlug, body, values);
          })
          .then(function(url) {
            sails.log.debug('setting new path for image to ', url);
            values.path = url;
            next();
          })
          .catch(function(err) {
            sails.log.error(err);
            //sails.log.debug('retrying upload without artist slug');
            //return uploadS3('', body, values);
            next();
          });

      })
      .on('error', function(err) {
        sails.log.debug('catch err calling getimage:');
        sails.log.error(err);
        next();
      });

    } else {
      next();
    }
  }
};
