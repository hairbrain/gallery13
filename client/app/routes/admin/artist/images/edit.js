import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var image = this.store.find('image', params.image_id);
    return image;
  }
});
