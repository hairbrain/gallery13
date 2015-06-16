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
      this.transitionTo('admin.pages');
    }
  }
});
