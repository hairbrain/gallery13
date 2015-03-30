import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var artist = this.store.find("artist", {'slug': params.artist_slug });
    return artist;
  },
  serialize: function(model) {
    // this will make the URL `/posts/foo-post`
    //console.log('serialize...');
    //console.log(model);
    return { artist_slug: model.get('slug') };
  }
});
