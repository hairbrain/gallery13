import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Home',
  model: function() {
    return this.store.find('event', {sort: 'order asc'});
  }
});
