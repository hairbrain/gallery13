import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Create New Blog Post',
  model: function() {
    return this.store.createRecord('post');
  },
  setupController(controller, model) {
    controller.set('model', model);
    this.store.find('image').then(function(images) {
      if (!controller.model.get('allArtistImages')) {
        controller.model.set('allArtistImages', Ember.A([]));
      }
      controller.model.set('allArtistImages', images);
    });
  },
  actions: {
    update: function(model) {
      var _this = this;
      var name = this.session.get('user.firstName'); // + ' ' + this.session.get('user.lastName');
      model.set('author', name);
      model.save()
      .then(function() {
        _this.transitionTo('admin.blog');
      });
    }
  }
});
