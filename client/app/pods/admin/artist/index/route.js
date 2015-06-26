import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    // var artist = this.store.find("artist", params.artist_id);
    // return artist;
    return this.modelFor('admin.artist');
    // return this.store
    // .find('artist', params.artist_id)
    // .then(function (model) {
    //   return model.content[0];
    // });
  }
});
