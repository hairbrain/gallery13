import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';


export default Ember.Route.extend(ApplicationRouteMixin, {
  title: function (tokens) {
    return tokens.reverse().join(' - ') + ' - Gallery13';
  },
  model: function () {
    var result = [];
    return this.store
      .find('page', {sort: 'order asc'})
      .then(function(pages) {
        "use strict";
        pages.forEach(function(page) {
          if(page.get('name') !== 'home') {
            result.push(page);
          }
        });
        return result;
      })
      .catch(function(err) {
        "use strict";
        console.log(err);
      });
  }
});
