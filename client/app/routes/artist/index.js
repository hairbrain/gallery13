import Ember from 'ember';

export default Ember.Route.extend({
  // titleToken: 'artist'
  model: function (params) {
    // return this.modelFor('artist');
    return this.store
    .find('artist', {'slug': params.artist_slug })
    .then(function (model) { return model.content[0]; });
  },
  // serialize: function (model) {
  //   // this will make the URL `/posts/foo-post`
  //   //console.log('serialize...');
  //   //console.log(model);
  //   return { artist_slug: model.get('slug') };
  // }
});
