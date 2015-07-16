import Ember from 'ember';

export default Ember.Route.extend({
   titleToken: 'Home',
   model: function() {
     return this.store.find('page', { 'name': 'home' })
       .then(function(pages) {
         "use strict";
         return pages.get('firstObject');
       });
   },
  renderTemplate: function (controller, model) {
    var templateName;
    var _this = this;

     console.log('home controller, ', controller);
     console.log('home model, ', model);

    templateName = model._data.layout;

    // todo: test if the layout template exists, if not return a friendly not found
    _this.render('admin.pages.layouts.' + templateName);
  }
});
