var bcrypt = require('bcrypt');

/**
* User.js
*
* @module      :: Model
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    firstName: { type: 'string' },
    lastName : { type: 'string' },

    // email : { type: 'string' },
    username: {
      type    : 'email', // Email type will get validated by the ORM
      required: true,
      unique  : true,
      index: true
    },

    // You might want to put this into it's own model if you want to support
    // social logins but keep the same account
    password: {
      type    : 'string'
      //required: true
    },
    //JM removing this here to simply admin based editing of users.
    toJSON: function () {
      var obj = this.toObject();
      // Remove the password object value
      delete obj.password;
      // return the new object without password
      return obj;
    }
  },
  //JM this was an attempt to allow us to keep the above toJSON logic
  //   and instead look up the exisitng user record and backfil the
  //   password to satisfy the required validation

  //beforeValidate: function(user, db) {
  //  var existingPassword = false;
  //  var Model = req._sails.models[ 'User' ];
  //  sails.log.info('Model is', Model);
  //  return Model.findOne(user.user_id).exec(function(err, suspect) {
  //    if (err) {
  //      //return next(err);
  //      sails.log.error(err);
  //    }
  //    if (suspect) {
  //      user.password = suspect.password;
  //      Sails.log.info('updated with saved password.');
  //    }
  //    //next();
  //  });
  //},
  // salt the password before it gets saved
  beforeCreate: function (user, cb) {



    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        console.log(err);
        cb(err);
      } else {
        bcrypt.hash(user.password, salt, function (err, hash) {
          if (err) {
            console.log(err);
            cb(err);
          } else {
            user.password = hash;
            cb(null, user);
          }
        });
      };
    });
  }
};
