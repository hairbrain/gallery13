import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Event Manager',

  model: function () {
    return this.store.find('event');
  },

  actions: {
    update: function (model) {
      // var _this = this;
      // var userId = this.session.get('user.id');
      model.save();
      this.transitionTo('admin.events');
    },
    delete: function (model) {
      // var artist = model.artist;
      model.destroyRecord();
      this.transitionTo('admin.events');
    },
    cancel: function () {
      // var m = model;
      this.transitionTo('admin.events');
    }
  }
});
