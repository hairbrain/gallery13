import Ember from 'ember';

export default Ember.Controller.extend({
  featuredArtistImage: '',
  featuredArtistCaption: '',
  actions: {
    showFeaturedArtistImage: function(artist) {
      // console.log('showFeatured fired');
      // console.log(artist);
      this.set('featuredArtistImage', artist.get('featureImage'));
      this.set('featuredArtistCaption', artist.get('statement'));
      return false;
    }
  }
});
