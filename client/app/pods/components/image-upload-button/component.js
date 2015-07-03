import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    uploadImage(file) {
      this.sendAction('action', file);
    }
  }
});
