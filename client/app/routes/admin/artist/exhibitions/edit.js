import Ember from 'ember';

export default Ember.Route.extend({

  setupController(controller, model) {
    controller.set('model', model);
    this.store.find('image').then(function (images) {
      if (!controller.get('images')) {
        controller.set('images', Ember.A([]));
      }
      controller.set('images', images);
    });
  }

});
