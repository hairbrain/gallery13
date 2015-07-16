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

      data.forEach(function (upload){

        //get a filepicker instance here.
        filepicker.read(upload, {base64encode: true},
          function(data) {
            "use strict";
            //console.log(data);
            let image = self.store.createRecord('image', { artist: self.get('model')});
            image.set('path', 'data:image/jpeg;base64,' + data);
            image.save();
          },
          function(err) {
            "use strict";
            console.error(err);
          },
          function(/*progressPercent*/) {
            "use strict";
            //console.log(progressPercent);
          }
        );

        //let image = self.store.createRecord('image', { artist: self.get('model')});
        //image.set('path', upload.url);
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
