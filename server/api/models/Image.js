/* global module require */
/**
* Image.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var slug = require('slug');
var safename 		= require('safename');
var skipperS3 	= require('skipper-s3');

module.exports = {
  attributes: {
    path       : { type: 'text' },
    title      : { type: 'string' },
    description: { type: 'string' },
    slug       : { type: 'string', index: true },
    order      : { type: 'float', index: true },
    artist     : { model: 'artist', index: true }
  },
  // Lifecycle Callbacks
  afterValidate: function (values, next) {
    // Create slug from image title for url
    if (values.title !== null && values.title.length) {
      values.slug = slug(values.title, {lower: true});
    } else {
      // here we should generate some default [and unique] value
      values.slug = 'new-image';
    }

    // here we will check the image.path to see if it contains a base64 string
    // if it does, we will upload it to S3 and update the path to the new path in S3
    var path = values.path;
    if (path !== null && path.length) {
      if (path.indexOf('data:image/jpeg;base64,') > -1) {

        console.log('path contains a base64 string');

        var file = values.title; // req.file('file');
        var path = '/images/artists/' + values.description; // req.body.path;
        var filename = safename(values.title, '-');

        var imageBuffer = new Buffer(path, 'base64');
        console.log('created imageBuffer: ', imageBuffer);

        imageBuffer.upload({
          dirname: path, // '../../assets' + path,
          saveAs : filename,
          adapter: skipperS3,
          key    : process.env.S3_KEY,
          secret : process.env.S3_SECRET,
          bucket : process.env.S3_BUCKET

        }, function (err, uploadedFiles) {
          if (err) {
            sails.log.error(err);
            return res.send(500, err);
          }

          var uploadedFilePath = uploadedFiles[0].extra.Location;

          values.path = uploadedFilePath;

          //return res.json({
          //  message: uploadedFiles.length + ' file(s) uploaded successfully!',
          //  path   : uploadedFilePath // path + '/' + filename
          //});
        });

      }
    }


    next();
  },
  afterDestroy: function(deleted_record, next){
    //todo: update image model to delete the associate file in S3, if set.
    next();
  }
};
