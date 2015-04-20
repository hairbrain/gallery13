import Ember from 'ember';

export default Ember.Route.extend({
  serialize: function(model) {

    //console.log('PostRoute.Serialize.model...');
    //console.log(model);
    // here we return the dynamic part of the route `/blog/foo-post`
    return { post_slug: model.get('slug') };
  }
});