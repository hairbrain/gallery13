import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Artist Exhibitions',
  model: function() {
    return this.store.find('exhibition');
  }
});
