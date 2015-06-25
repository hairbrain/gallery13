import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('user');
  },
  actions: {
    createUser: function (model) {
      var _this = this;
      model.save()
      .then(function(/*user*/) {
        _this.transitionTo('login');
      }).catch(function(err) {
        _this.set('errorMessage', err);
      });

      // let host = this.store.adapterFor('application').get('host');
      // let namespace = this.store.adapterFor('application').get('namespace');
      // let url = host + '/' + namespace + '/users';
      // Ember.$.ajax({
      //   url: url,
      //   type: 'POST',
      //   data: JSON.stringify({
      //     user: {
      //       password: model.get('password'),
      //       username: model.get('username'),
      //       firstName: model.get('firstName'),
      //       lastName: model.get('lastName')
      //     }
      //   }),
      //   contentType: 'application/json'
      // }).then(function(/*response*/) {
      //   _this.transitionTo('login');
      //
      // }, function(xhr, status, error) {
      //   _this.set('errorMessage', error);
      // });

    }
  }
});
