import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    var exhibition = this.store.find('exhibition', params.exhibition_id);
    return exhibition;
  }

});
