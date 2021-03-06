import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: function (model) {
    return 'Editing: ' + model.get('name');
  },
  model: function (params) {
    //console.log(params);
    return this.store.find('artist', params.artist_id);
  },
  setupController(controller, model) {
    controller.set('model', model);
    this.store.find('image').then(function (images) {
      if (!controller.model.get('allArtistImages')) {
        controller.model.set('allArtistImages', Ember.A([]));
      }
      controller.model.set('allArtistImages', images);
    });
  },
  transitionAfterAction: function (modelType, self) {
    if (modelType === 'artist') {
      self.transitionTo('admin.artists');
    } else {
      self.transitionTo('admin.artist', self.modelFor('admin/artist'));
    }
  },
  actions: {
    update: function (model) {
      var self = this;
      var modelType = model.constructor.typeKey;

      return model.save().then(function () {
        self.transitionAfterAction(modelType, self);
      }, function (reason) {
        console.log('error saving child: ' + reason);
        self.transitionAfterAction(modelType, self);
      });
    },
    delete: function (model) {
      var self = this;
      var modelType = model.constructor.typeKey;
      return model.destroyRecord().then(function () {
        self.transitionAfterAction(modelType, self);
      }, function (reason) {
        console.log('error deleting child: ' + reason);
        self.transitionAfterAction(modelType, self);
      });
    },
    createNewImage: function () {
      var self = this;
      var newImage = this.store.createRecord('image');
      var artist = this.modelFor('admin/artist');

      newImage.set('artist', artist);
      return newImage.save().then(
        function (savedImage) {
          self.transitionTo('admin.artist.edit-image', savedImage);
        },
        function (reason) {
          console.log('error creating new image: ' + reason);
          self.refresh();
        }
      );
    },
    createNewExhibition: function () {
      var self = this;
      var newRecord = this.store.createRecord('exhibition');
      var artist = this.modelFor('admin/artist');

      newRecord.set('artist', artist);
      return newRecord.save().then(
        function (savedRecord) {
          self.transitionTo('admin.artist.exhibitions.edit', savedRecord);
        },
        function (reason) {
          console.log('error creating new exhibition: ' + reason);
          self.refresh();
        }
      );
    }
  }
});
