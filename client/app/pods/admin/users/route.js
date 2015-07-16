import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('user');
  },
  actions: {
    update: function (model) {
      var self = this;
      return model.save().then(function () {
        self.transitionTo('admin.users');
      }, function (reason) {
        //debugger;
        alert('error saving child: ' + reason.responseJSON.summary);

      });
    },
    delete: function (model) {
      var self = this;
      return model.destroyRecord().then(function () {
        self.transitionTo('admin.users');
      }, function (reason) {
        console.log('error deleting child: ' + reason);
      });
    },
  }
});
