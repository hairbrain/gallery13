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
    this.route('edit', function() {
      this.route('image', {
        path: '/edit-image/:image_id'
      });
    });
  });

  this.resource('blog', function() {
    this.route('post', { path: ':post_slug' }, function() {});
  });

  adminRouter(this);
  this.resource('pages', function() {
    this.route('edit', { path: ':page_id' });
    this.route('new');
  });
  this.route('catchall', { path: '/*slug' });
  this.route('event-manager', function() {
    this.route('edit', {
      path: '/edit/:event_id'
    }, function() {
      this.route('images', function() {
        this.route('edit', {
          path: '/edit/:image_id'
        });
      });
    });
    this.route('new');
  });
  this.route('events');
});

export default Router;
