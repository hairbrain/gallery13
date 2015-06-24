/**
* Exhibitions.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    title      : { type: 'string' },
    subtitle   : { type: 'string' },
    description: { type: 'string' },
    image      : { type: 'string' },
    order      : { type: 'float' },
    artist     : { model: 'artist' }
  }
};

