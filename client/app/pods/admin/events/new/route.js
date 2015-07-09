import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.createRecord('event');
  },
  setupController(controller, model) {
    controller.set('model', model);
    this.store.find('image').then(function (images) {
      if (!controller.model.get('allArtistImages')) {
        controller.model.set('allArtistImages', Ember.A([]));
      }
      controller.model.set('allArtistImages', images);
    });
  }
});
