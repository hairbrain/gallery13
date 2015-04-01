import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Manage Pages',
  model: function() {
    return this.store.find('page');
  }
});
