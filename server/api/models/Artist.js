/**
* Artist.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var slug = require('slug');

module.exports = {

  attributes: {
    name        : { type: 'string' },
    slug        : { type: 'string' },
    statement   : { type: 'string' },
    bio         : { type: 'string' },
    press       : { type: 'string' },
    description : { type: 'string' },
    featureImage: { type: 'string' },
    order       : { type: 'float' },
    images      : {
      collection: 'image',
      via       : 'artist'
    },
    exhibitions: {
      collection: 'exhibition',
      via       : 'artist'
    }
  },

  // Lifecycle Callbacks
  afterValidate: function (values, next) {
    // Create slug from artist name for url
    values.slug = slug(values.name, {lower: true});
    next();
  }
};

