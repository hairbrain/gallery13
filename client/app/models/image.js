import DS from 'ember-data';

export default DS.Model.extend({
  path: DS.attr('string'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  order: DS.attr('number'),

  artist: DS.belongsTo('artist'),
  event: DS.hasMany('event'),
  // pages: DS.hasMany('page')
});
