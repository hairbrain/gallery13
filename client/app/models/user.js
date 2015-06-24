import Ember from 'ember';
import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName : DS.attr('string'),
  username : DS.attr('string'),
  // email    : DS.attr('string'),
  password : DS.attr('string'),
  fullName : Ember.computed('firstName', 'lastName', function () {
    return this.get('firstName') + ' ' + this.get('lastName');
  })
});
