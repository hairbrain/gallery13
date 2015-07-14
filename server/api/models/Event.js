/**
* Event.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    slug        : { type: 'string' },
    title       : { type: 'string' },
    subtitle    : { type: 'string' },
    description : { type: 'string' },
    image       : { type: 'string' },
    order       : { type: 'float' },
    date        : { type: 'date' }
  }
};

