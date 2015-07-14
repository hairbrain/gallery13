import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: function () {
    return 'edit page';
  },
  actions: {
    //update: function (model) {
    //
    //  model.save();
    //  this.transitionTo('admin.pages');
    //
    //},
    update: function (model) {
      var self = this;
      return model.save().then(function () {
        self.transitionTo('admin.pages');
      }).catch(function (reason) {
        console.log('error saving child: ' + reason);
        alert('there was an error saving the changes.. check the console.');
      });
    },
    updateAndView: function(model) {
      "use strict";
      var self = this;
      return model.save().then(function (page) {
        self.transitionTo('catchall', page);
      }).catch(function (reason) {
        console.log('error saving child: ' + reason);
        alert('there was an error saving the changes.. check the console.');
      });
    }

  }
});
