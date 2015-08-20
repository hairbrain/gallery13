/* global filepicker */
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
      //console.log('file selected data:', data);
      data.forEach(function (upload){
        //console.info('upload: ', upload);

        let image = self.store.createRecord('image', {
          artist: self.get('model'),
          title: upload.filename,
          path: upload.url
        });
        image.save();
      });
      this.send('hidePicker');
    },
    onClose: function() {
      this.send('hidePicker');
    },
    onError: function(/*error*/) {
      this.send('hidePicker');
    }
  }

});
