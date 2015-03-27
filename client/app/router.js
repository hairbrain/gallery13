import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  //this.resource('index', function() {}, { path:'/'});
  this.resource('event', function() {});
  this.resource('user', function() {});
  this.route('artists', function() {
    this.resource('artist', function() {});
  });
});

export default Router;
