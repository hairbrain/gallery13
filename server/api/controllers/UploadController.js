/**
 * UploadController
 *
 * @description :: Server-side logic for managing uploads
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var safename 		= require("safename");
var skipperS3 	= require('skipper-s3');
// var config 			= require('../config/environment');

module.exports = {
	image: function(req, res) {
    var file = req.file("file");
    var path = req.body.path;
    var filename = safename(req.body.name, "-");
    // var path = "/images/artists/" + artist;
		//https://github.com/balderdashy/skipper
		// sails.log.info('S3 config is:');
		// sails.log.info(sails.config.uploadS3);
		file.upload({
      dirname: path, //"../../assets" + path,
      saveAs: filename, //,
			adapter: skipperS3,
			key: sails.config.uploadS3.key,
			secret: sails.config.uploadS3.secret,
			bucket: sails.config.uploadS3.bucket
     }, function (err, uploadedFiles) {
			if (err) {
				sails.log.error(err);
				return res.send(500, err);
			}
			// sails.log.info('uploadedFiles:');
			// sails.log.info(uploadedFiles);
			var uploadedFilePath = uploadedFiles[0].extra.Location;
			// sails.log.info('location is: ' + uploadedFilePath);
			return res.json({
				message: uploadedFiles.length + " file(s) uploaded successfully!",
				path: uploadedFilePath //path + "/" + filename
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
