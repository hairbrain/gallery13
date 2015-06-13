import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Create New Blog Post',
  model: function() {
    return this.store.createRecord('post');
  },
  actions: {
    update: function(model) {
      var _this = this;
      debugger;
      var name = this.session.get('user.firstName'); // + ' ' + this.session.get('user.lastName');
      model.set('author', name);
      model.save()
      .then(function() {
        _this.transitionTo('admin.blog');
      });
    }
  }
});
