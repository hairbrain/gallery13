import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: function(model) {
    return 'Editing: ' + model.get('name');
  },
  model: function(params) {
    var artist = this.store.find("artist", params.artist_id);
    return artist;
  },
  actions: {
    update: function(model) {
      var self = this;
      return model.save().then(function() {
        self.transitionTo('admin.artists');
      }, function(reason) {
        console.log('error saving child: ' + reason);
        self.transitionTo('admin.artists');
      });
    },
    delete: function(model) {
      var self = this;
      return model.destroyRecord().then(function() {
        self.transitionTo('admin.artists');
      }, function(reason) {
        console.log('error deleting child: ' + reason);
        self.transitionTo('admin.artists');
      });
    },
    createNewImage: function() {
      var self = this,
          newImage = this.store.createRecord('image'),
          artist = this.modelFor('admin/artist');

      newImage.set('artist', artist);
      return newImage.save().then(
        function(savedImage) {
          self.transitionTo('admin.artist.edit-image', savedImage);
        },
        function(reason) {
          console.log('error creating new image: ' + reason);
          self.refresh();
        }
      );
    }
  }
});
