import DS from 'ember-data';

export default DS.Model.extend({
  title      : DS.attr('string'),
  subtitle   : DS.attr('string'),
  description: DS.attr('string'),
  image      : DS.attr('string'),
  order      : DS.attr('number'),
  // images     : DS.hasMany('image')
});
