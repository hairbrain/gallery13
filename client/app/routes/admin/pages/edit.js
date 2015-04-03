import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: function() {
    return 'edit page';
  },
  actions: {
    update: function (model) {

      model.save();
      this.transitionTo('admin.pages');

    },
    layoutChanged: function(val, model) {
      //todo: finish making input select bound to layout property
      //console.log(model);
      //this.model.set('layout', val);
    }
  }
});
