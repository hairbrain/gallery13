/**
* Image.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var slug = require('slug');

module.exports = {
  attributes: {
    path : { type: 'string' },
    title : { type: 'string' },
    description : { type: 'string' },
    slug : { type: 'string' },
    order : { type: 'float' },
    artist : { model: 'artist' }
  },
  // Lifecycle Callbacks
  afterValidate: function(values, next) {
    // Create slug from image title for url
    values.slug = slug(values.title, {lower: true})
    next();
  }
};

