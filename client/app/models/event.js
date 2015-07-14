import DS from 'ember-data';

export default DS.Model.extend({
  slug       : DS.attr('string'),
  title      : DS.attr('string'),
  subtitle   : DS.attr('string'),
  description: DS.attr('string'),
  image      : DS.attr('string'),
  order      : DS.attr('number'),
  date : DS.attr('date', {
    defaultValue: function () {
      return new Date();
    }
  }),
});
