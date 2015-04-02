import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Create New Site Page',
  model: function() {
    return this.store.createRecord('page');
  },

  actions: {
    update: function(model) {
      var _this = this;
      //var userId = this.session.get('user.id');
      model.save();
      this.transitionTo('pages');
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
