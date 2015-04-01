import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  slug: DS.attr('string'),
  date: DS.attr('date'),
  image: DS.attr('string'),
  excerpt: DS.attr('string'),
  body: DS.attr('string')
});
