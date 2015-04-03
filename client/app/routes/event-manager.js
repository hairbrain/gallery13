import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Event Manager',
  model: function() {
    return this.store.find('event');
  },
  actions: {
    update: function(model) {
      var _this = this;
      //var userId = this.session.get('user.id');
      model.save();
      this.transitionTo('event-manager');
    },
    delete: function(model) {
      //var artist = model.artist;
      model.destroyRecord();
      this.transitionTo('event-manager');
    },
    cancel: function(model) {
      var m = model;
      this.transitionTo('event-manager');
    }
  }
});
