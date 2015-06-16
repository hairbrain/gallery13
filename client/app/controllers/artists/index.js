import Ember from 'ember';

export default Ember.Controller.extend({
  featuredArtistImage: '/images/artists/greggreen/The_Battle_of_Rabbit_Skenia.jpg',

  featuredArtistCaption: '',

  actions: {
    showFeaturedArtistImage: function(artist) {
      // console.log('showFeatured fired');
      // console.log(artist);
      this.set('featuredArtistImage', artist.get('featureImage'));
      this.set('featuredArtistCaption', artist.get('statement'));
      return false;
    },
    createNew: function() {
      // this.store.createRecord();
      // {{debugger}}
      // var artist = this.store.createRecord('artist', {
      //   slug: '/new-artist',
      //   name: 'new',
      //   statement: '',
      //   bio: '',
      //   press: '',
      //   description: ''//,
      //   // images: []
      // });
      // artist.save();
    }

  }
});
