import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: function (model) {
    return model.get('name');
  },
  model: function (params) {
    return this.store.find('artist', { 'slug': params.artist_slug })
      .then(function(artists) {
        "use strict";
        return artists.get('firstObject');
      });
  },
  serialize: function (model) {
    // this will make the URL `/artist/slug` work
    return { artist_slug: model.get('slug') };
  }
});
