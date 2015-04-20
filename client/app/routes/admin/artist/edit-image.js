import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var image = this.store.find('image', params.image_id);
    return image;
  },
  actions: {
    update: function(model) {
      var self = this;
      return model.save().then(function() {
        self.transitionTo('admin.artist', self.modelFor('admin/artist'));
      }, function(reason) {
        console.log('error saving child: ' + reason);
        self.transitionTo('admin.artist', self.modelFor('admin/artist'));
      });
    },
    delete: function(model) {
      var self = this;
      return model.destroyRecord().then(function() {
        self.transitionTo('admin.artist', self.modelFor('admin/artist'));
      }, function(reason) {
        console.log('error deleting child: ' + reason);
        self.transitionTo('admin.artist', self.modelFor('admin/artist'));
      });
    }
  }
});
