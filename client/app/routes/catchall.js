import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: function(model) {
    return model.get('title');
  },
  model: function(params) {
    // console.log('Catchall PARAMS, ', params);
    return this.store.find('page', { slug: params.slug });
  },
  renderTemplate: function(controller, model) {
    var templateName;
    var _this = this;

    // console.log('Catchall controller, ', controller);
    // console.log('Catchall model, ', model);

    templateName = model._data.layout;

    // todo: test if the layout template exists, if not return a friendly not found
    _this.render('admin.pages.layouts.' + templateName);
  }
});
