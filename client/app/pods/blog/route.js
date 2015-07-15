import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Blog',

  model: function () {
    return this.store.find('post', { sort: 'date desc' });
  },
  afterModel: function(posts, transition) {
    if (transition.targetName === this.routeName + '.index') {
      if (posts.get('length') > 0) {
        this.transitionTo('blog.post', posts.get('firstObject'));
      }
    }
  }
});
