import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  username: DS.attr('string'),
  //email: DS.attr('string'),
  password: DS.attr('string')//,
  // fullName: Ember.computed('firstName', 'lastName', function(key, value) {
  //   return this.get('firstName') + ' ' + this.get('lastName');
  // })
});
