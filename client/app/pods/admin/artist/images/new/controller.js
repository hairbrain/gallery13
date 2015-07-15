import Ember from 'ember';

export default Ember.ObjectController.extend({

  showFilePicker: false,

  actions : {
    showPicker: function() {
      this.set('showFilePicker', true);
    },
    hidePicker: function() {
      this.set('showFilePicker', false);
    },
    fileSelected: function(data) {
      var self = this;
      data.forEach(function (upload){
        let image = self.store.createRecord('image', { artist: self.get('model')});
        image.set('path', upload.url);
      });
      this.send('hidePicker');
    },
    onClose: function() {
      this.send('hidePicker');
    },
    onError: function(error) {
      this.send('hidePicker');
    }
  }

});
