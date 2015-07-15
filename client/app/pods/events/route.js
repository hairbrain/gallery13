import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Events',
  model: function() {
    "use strict";
    return this.store.find('event', { sort: 'order asc' });
  },
  afterModel: function(events, transition) {
    if (transition.targetName === this.routeName + '.index') {
      if (events.get('length') > 0) {
        this.transitionTo('events.list', events.get('firstObject'));
      }
    }
  }
});
