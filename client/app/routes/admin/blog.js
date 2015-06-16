import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Blog Manager',

  model: function() {
    return this.store.find('post');
  }
});
