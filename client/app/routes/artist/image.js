import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: function (model) {
    return model.get('title');
  }
});
