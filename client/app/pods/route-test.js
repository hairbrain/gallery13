import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Blog',
  model: function() {
    return this.store.find('post');
  }
});
