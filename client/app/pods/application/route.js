import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  title: function(tokens) {
    return tokens.reverse().join(' - ') + ' - Gallery13';
  },
  model: function() {
    return this.store.find('page', {sort: 'order asc'});
  }
});
