import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  slug: DS.attr('string'),
  statement: DS.attr('string'),
  bio: DS.attr('string'),
  press: DS.attr('string'),
  description: DS.attr('string'),
  featureImage: DS.attr('string')
});
