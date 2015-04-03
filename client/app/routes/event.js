import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Events',
  model: function() {
    return this.store.find('event');
  }
});
