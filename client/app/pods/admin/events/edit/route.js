import Ember from 'ember';

export default Ember.Route.extend({
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
