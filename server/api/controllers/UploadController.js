/**
 * UploadController
 *
 * @description :: Server-side logic for managing uploads
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var safename = require("safename");
var skipperS3 = require('skipper-s3');

module.exports = {
	image: function(req, res) {
    var file = req.file("file");
    var path = req.body.path;

    var filename = safename(req.body.name, "-");
    // var path = "/images/artists/" + artist;

		file.upload({
      dirname: "../../assets" + path,
      saveAs: filename //,
			//https://github.com/balderdashy/skipper
			// adapter: require('skipper-s3'),
			// key: 'YOUR_S3_API_KEY',
			// secret: 'YOUR_S3_API_SECRET',
			// bucket: 'YOUR_S3_BUCKET'
     }, function (err, uploadedFiles) {
			if (err) { return res.send(500, err); }
			return res.json({
				message: uploadedFiles.length + " file(s) uploaded successfully!",
				path: path + "/" + filename
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
