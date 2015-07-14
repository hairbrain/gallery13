import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: function (model) {
    return model.get('title');
  },
  model: function (params) {
    return this.store.find('event', { slug: params.event_slug})
      .then(function(records) {
        "use strict";
        return records.get('firstObject');
      });
  },
  serialize: function (model) {

    // console.log('PostRoute.Serialize.model...');
    // console.log(model);
    // here we return the dynamic part of the route `/blog/foo-post`
    return { event_slug: model.get('slug') };
  }
});
