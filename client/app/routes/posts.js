import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('post', { slug: params.post_slug});
  },
  serialize: function(model) {
    return { post_slug: model.get('slug') };
  }
});
