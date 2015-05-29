/**
 * UploadController
 *
 * @description :: Server-side logic for managing uploads
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	image: function(req, res) {
    var file = req.file('file');
    var artist = req.body.artist;

    var filename = req.body.name;
    var path = '/images/artists/' + artist;

    // Skipper handles uploads for sails.js
    // https://github.com/balderdashy/skipper
    file.upload({
      dirname: '../../assets' + path,
      saveAs: filename
    }, function (err, uploadedFiles){

      if (err) {
        return res.send(500, err);
      }
      Image.create({
        path: path + '/' + filename,
        artist: artist,
        title: req.body.title,
        description: req.body.description,
        order: req.body.order
      }).exec(function (err, image) {
        return res.json({
          image: image
        });
      });
    });
  }
};

