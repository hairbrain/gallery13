import DS from 'ember-data';

export default DS.Model.extend({
  name        : DS.attr('string'),
  subtitle    : DS.attr('string'),
  slug        : DS.attr('string'),
  statement   : DS.attr('string'),
  bio         : DS.attr('string'),
  press       : DS.attr('string'),
  description : DS.attr('string'),
  featureImage: DS.attr('string'),
  // todo: figure out why we're having issues saving the order!
  order       : DS.attr('number'),
  images      : DS.hasMany('image'),
  exhibitions : DS.hasMany('exhibition')
});
