/* global sails */

/**
 * UploadController
 *
 * @description :: Server-side logic for managing uploads
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var safename 		= require('safename');
var skipperS3 	= require('skipper-s3');

module.exports = {
	image: function (req, res) {

		try {
      require('dotenv').load();
    } catch (e) {
      sails.log.info('No .env file loaded, using environment variables.');
    }

    var file = req.file('file');
    var path = req.body.path;
    var filename = safename(req.body.name, '-');
    // var path = '/images/artists/' + artist;
		// https://github.com/balderdashy/skipper
		// sails.log.warn('S3 Key: ' +  process.env.S3_KEY);
		sails.log.info('Uploading ' + filename + ' to S3 Bucket: ' + process.env.S3_BUCKET);

		file.upload({
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

			return res.json({
				message: uploadedFiles.length + ' file(s) uploaded successfully!',
				path   : uploadedFilePath // path + '/' + filename
			});
		});

    // Skipper handles uploads for sails.js
    // https://github.com/balderdashy/skipper
    // file.upload({
    //   dirname: '../../assets' + path,
    //   saveAs: filename
    // }, function (err, uploadedFiles) {
		//
    //   if (err) {
    //     return res.send(500, err);
    //   }
    //   Image.create({
    //     path: path + '/' + filename,
    //     artist: artist,
    //     title: req.body.title,
    //     description: req.body.description,
    //     order: req.body.order
    //   }).exec(function (err, image) {
    //     return res.json({
    //       'image': image
    //     });
    //   });
    // });
  }
};
