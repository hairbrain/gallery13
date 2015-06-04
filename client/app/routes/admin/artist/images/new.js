import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('image', { artist: this.modelFor('admin.artist')});
  },
  actions: {
    queueImage(file) {
      let controller = this.controller;
      let image = controller.get('model');
      image.set('file', file);
      file.read().then(function setPreviewUrl(url) {
        if (image.get('url') == null) {
          image.set('url', url);
        }
      });
      controller.set('image', image);
    },
    saveArtistImage() {
      let controller = this.controller;
      let image = controller.get('model');
      let artist = this.modelFor('admin.artist');
      if (image) {
        let accessToken = this.container.lookup('simple-auth-authorizer:oauth2-bearer').session.content.access_token;
        let file = image.file;
        file.upload('http://localhost:1337/api/v1/uploads/image', {
          data: {
            artist: artist.get('slug'),
            title: image.title,
            description: image.description,
            order: image.order
          },
          headers: { Authorization: 'bearer ' + accessToken }
        }).then(function uploadSucceeded(response) {
          console.log(response);
          image.set('path', response.body.image.path);
          image.save();
        }, function uploadFailed() {
          image.rollback();
          console.error('Could not upload image.');
        }).then(
          this.transitionTo('admin.artist')
        );
      }
    },
    cancelNewArtistImage() {
      let controller = this.controller;
      let image = controller.get('image');
      if (image) {
        image.rollback();
        controller.set('image', null);
      }
      this.transitionTo('admin.artist');
    }
  }
});
