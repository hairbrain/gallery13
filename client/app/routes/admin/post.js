import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: function(model) {
    return 'Editing post: ' + model.get('name');
  },
  model: function(params) {
    var model = this.store.find("post", params.post_id);
    return model;
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
    cancel: function(model) {
      model.rollback();
      this.transitionTo('admin.blog');
    },
    update: function(model) {
      var self = this;
      return model.save().then(function() {
        self.transitionTo('admin.blog');
      }, function(reason) {
        console.log('error saving child: ' + reason);
        self.transitionTo('admin.blog');
      });
    },
    delete: function(model) {
      var self = this;
      return model.destroyRecord().then(function() {
        self.transitionTo('admin.blog');
      }, function(reason) {
        console.log('error deleting blog post: ' + reason);
        self.transitionTo('admin.blog');
      });
    }
  }
});
