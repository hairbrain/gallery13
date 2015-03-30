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
    this.route('new');
  });
  this.resource('artist', { path: '/artist/:artist_slug' }, function() {
    this.route('index', { path:'/'});
    this.route('bio');
    this.route('statement');
    this.route('press');
    this.route('image', { path: '/image/:image_id' });
    this.route('edit');
  });
  //this.resource('images', function() {});

  adminRouter(this);
});

export default Router;
