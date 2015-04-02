import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  slug: DS.attr('string'),
  title: DS.attr('string'),
  navLabel: DS.attr('string'),
  layout: DS.attr('string', { defaultValue: 'standard'}),
  excerpt: DS.attr('string'),
  body: DS.attr('string'),
  order: DS.attr('number'),
  images: DS.hasMany('image')
});
