import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Events',
  model: function() {
    "use strict";
    return this.store.find('event', { sort: 'order asc' });
  },
  afterModel: function(events, transition) {
    //console.log(transition.targetName);
    //console.log(this.routeName);
    if(transition.targetName === this.routeName + '.index') {

      this.transitionTo('events.list', events.get('firstObject'));

    }
  }
});
