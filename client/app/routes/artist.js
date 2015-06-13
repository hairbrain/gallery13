import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: function(model) {
    return model.get('name');
  },
  model: function(params) {
    return this.store.find("artist", {'slug': params.artist_slug });
  },
  serialize: function(model) {
    // this will make the URL `/posts/foo-post`
    //console.log('serialize...');
    //console.log(model);
    return { artist_slug: model.get('slug') };
  }
});
