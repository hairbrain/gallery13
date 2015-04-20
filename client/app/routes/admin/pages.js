import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Manage Pages',
  model: function() {
    return this.store.find('page');
  },
  actions: {
    delete: function(model) {
      var self = this;
      return model.destroyRecord().then(
        function() {
          self.transitionTo('admin.pages');
        },
        function(reason) {
          console.log('error deleting page, reason was: ' + reason);
          self.transitionTo('admin.pages');
        }
      );
    }
  }
});
