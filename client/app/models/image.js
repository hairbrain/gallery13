import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  path       : DS.attr('string'),
  title      : DS.attr('string'),
  description: DS.attr('string'),
  slug       : DS.attr('string'),
  order      : DS.attr('number'),

  artist: DS.belongsTo('artist'),
  // event : DS.hasMany('event'),
  // pages : DS.hasMany('page')

  fullTitle: Ember.computed('artist', 'title', function () {
    return this.get('artist').get('name') + ' - ' + this.get('title');
  }),

  fullUrl: Ember.computed('path', function () {
    let path = this.get('path');
    if (path && (path.indexOf('s3.amazonaws.com') > -1 || path.indexOf('filepicker.io') > -1)) {
      return path;
    } else {
      let host = this.store.adapterFor('application').get('host');
      return host + path;
    }
  })
});
