import Ember from 'ember';

export default Ember.Controller.extend({
  enlargedImage: null,

  actions: {
    enlargeImage: function (image) {
      this.set('enlargedImage', image);
      console.log('set enlargeImage');
    }
  }
});
