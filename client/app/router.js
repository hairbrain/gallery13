import Ember from 'ember';
import config from './config/environment';
import adminRouter from 'ember-admin/router';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('index', { path:'/'}, function() {});

  this.resource('event', function() {});
  this.resource('user', function() {});
  this.route('artists', function() {

  });
  this.resource('artist', { path: '/artist/:artist_slug' }, function() {
    //this.route('bio', {path: '/bio'});
    //this.route('statement', {path: '/statement'});
    //this.route('press', {path: '/press'});
  });
  this.resource('images', function() {});

  adminRouter(this);
});

export default Router;
