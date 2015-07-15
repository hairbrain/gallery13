/* global module require */
/**
* Image.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var slug = require('slug');

module.exports = {
  attributes: {
    path       : { type: 'text' },
    title      : { type: 'string' },
    description: { type: 'string' },
    slug       : { type: 'string' },
    order      : { type: 'float' },
    artist     : { model: 'artist' }
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
    next();
  }
};
