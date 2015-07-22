/**
* Posts.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    title  : { type: 'string' },
    slug   : { type: 'string', index: true },
    date   : { type: 'date', index: true },
    image  : { type: 'string' },
    excerpt: { type: 'text' },
    body   : { type: 'text' },
    author : { type: 'string' }
  }
};

