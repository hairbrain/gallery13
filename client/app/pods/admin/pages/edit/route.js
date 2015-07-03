import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: function () {
    return 'edit page';
  },
  actions: {
    update: function (model) {

      model.save();
      this.transitionTo('admin.pages');

    }
  }
});
