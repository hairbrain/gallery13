import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['following', 'bar'],
  actions: {
    invalidateSession: function() {
      this.sendAction();
    }
  }
});
