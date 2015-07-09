import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Events',
  model: function() {
    "use strict";
    return this.store.find('event');
  }
});
