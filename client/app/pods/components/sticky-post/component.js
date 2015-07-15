import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['ui', 'sticky'],
  didInsertElement: function() {
    "use strict";
    console.log(this.$());
    this.$()
      .sticky({
        //todo: abstract the context variable
        context        : '#left-column'
//        offset         : 50,
//        bottomOffset    : 0,
//        debug          : true,
//        observeChanges : true,
//        scrollContext  : '#left-column'
      })
    ;
  }
});
