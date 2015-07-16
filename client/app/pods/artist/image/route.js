import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: function (model) {
    return model.get('title');
  },
  model: function (params) {
    return this.store.find('image', { 'slug': params.image_slug })
      .then(function(images) {
        "use strict";
        return images.get('firstObject');
      });

  }
});
