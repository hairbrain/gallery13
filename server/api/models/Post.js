/**
* Posts.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    title  : { type: 'string' },
    slug   : { type: 'string' },
    date   : { type: 'date' },
    image  : { type: 'string' },
    excerpt: { type: 'string' },
    body   : { type: 'string' },
    author : { type: 'string' }
  }
};

