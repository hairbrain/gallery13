import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: '',
  setupController(controller, model) {
    //debugger;
    if (model.get('length') > 0) {
      controller.set('model', model);
      var firstArtist = model.get('firstObject');
      controller.set('featuredArtistImage', firstArtist.get('featureImage'));
      controller.set('featuredArtistCaption', firstArtist.get('statement'));
    }
  }
});
