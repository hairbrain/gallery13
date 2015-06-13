import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.Object.create();
  },
  actions: {
    createUser: function(model) {
      var _this = this;
      let host = this.store.adapterFor('application').get('host');
      let namespace = this.store.adapterFor('application').get('namespace');
      let url = host + '/' + namespace + '/users';
      Ember.$.ajax({
        url: url,
        type: 'POST',
        data: JSON.stringify({
          user: {
            password: model.get('password'),
            username: model.get('username')
          }
        }),
        contentType: 'application/json'
      }).then(function(/*response*/) {
        _this.transitionTo('login');

      }, function(xhr, status, error) {
        _this.set('errorMessage', error);
      });

    }
  }
});
