import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['ui', 'card'],
  // attributeBindings: ['href'],
  // href: "http://emberjs.com"
  actions: {
    invalidateSession: function() {
      this.send('invalidateSession');
    }
  }
});
