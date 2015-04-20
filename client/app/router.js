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
    this.route('post', { path: ':post_slug' }, function() { });
  });

  //adminRouter(this);



  this.route('events');
  this.resource('exhibitions', function() {});

  //route for dynamic pages
  this.route('catchall', { path: '/*slug' });
  this.route('admin', function() {

    this.route('blog', function() { });
    this.route('post', { path: '/post/:post_id' }, function() { });

    this.route('pages', function() {
      this.route('edit', { path: ':page_id' });
      this.route('new');
    });

    this.route('events', function() {
      this.route('edit', {
        path: '/edit/:event_id'
      }, function() {
        this.route('images', function() {
          this.route('edit', {
            path: '/edit/:image_id'
          });
          this.route('new');
        });
      });
      this.route('new');
    });

    this.route('artists', function() {
      this.route('new');
    });
    this.route('artist', { path: '/artist/:artist_id' }, function() {
      this.route('images');
      this.route('exhibitions');

      this.route('edit-image', {
        path: '/edit-image/:image_id'
      });
    });

    this.route('page', {
      path: '/page/:page_id'
    });


  });
});

export default Router;
