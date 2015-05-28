import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Create New Event Image',
  model: function() {
    return this.store.createRecord('image');
  },
  actions: {
    update: function(model) {
      var _this = this;
      //todo: get current event instance

      //todo: set the event on the image model

      //save the image model
      model.save();

      //todo: update this to transition back to editing the event
      this.transitionTo('events');

      //how-to-sane example
      //var user = this.store.find('user', userId).then(function(result) {
      //    model.set('user', result);
      //    user = result;
      //    return _this.geoGoogleService.getLatLongForAddress(model.get('address'));
      //  }).then(function (response) {
      //    var latlong = point(response.results[0].geometry.location);
      //    model.set('location', latlong);
      //    return model.save();
      //  }).then(() => this.transitionTo('s.users.user', user));
    }
  }
});
