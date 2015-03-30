/**
* Artist.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    name : { type: 'string' },

    slug : { type: 'string' },

    statement : { type: 'string' },

    bio : { type: 'string' },

    press : { type: 'string' },

    description : { type: 'string' },

    featureImage : { type: 'string' },

    order : { type: 'number' },

    images : {
      collection: 'image',
      via: 'artist'
    }
  }
};

