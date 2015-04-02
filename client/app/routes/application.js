import Ember from 'ember';

export default Ember.Route.extend({
  title: function(tokens) {
    return tokens.reverse().join(' - ') + ' - Gallery13';
  },
  model: function() {
    return this.store.find('page', {sort: 'order asc'});
  }
});
