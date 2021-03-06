/* global Ember, location, document */

import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.reopen({
  notifyGoogleAnalytics: function() {
    var url = this.get('url');
    // the following call is based on how the ember-cli-document-title addin is setting the title here:
    // https://github.com/kimroen/ember-cli-document-title/blob/master/vendor/document-title/document-title.js#L65
    var renderer = this.container.lookup('renderer:-dom');
    Ember.run.next(function() {
      "use strict";
      var title = Ember.get(renderer, '_dom.document.title');
      if (config.googleAnalyticsId) {

        //set the google analytics page
        ga('set', {
          page: url,
          title: title
        });

       //send the google analytics pageview event
        return ga('send', 'pageview', {
          'page': url,
          'title': title
        });
      } else {
        console.info('ga-disabled: setpage : %s => %s', url, title);
        console.info('ga-disabled: pageview : %s => %s', url, title);
      }

    });
  }.on('didTransition')
});

export default Router.map(function () {
  this.route('index', { path: '/'}, function () {});

  this.route('login');
  this.route('register');

  this.route('event', function () {});
  this.route('user', function () {});
  this.route('artists', function () {
    // this.route('new');
  });
  this.resource('artist', { path: '/artist/:artist_slug' }, function () {
    // this.route('index', { path: '/artist/:artist_slug' });
    this.route('bio');
    this.route('statement');
    this.route('press');
    this.route('image', { path: '/art/:slug' });
    this.route('edit', function () {
      this.route('image', {
        path: '/edit-image/:image_id'
      });
    });
  });


  this.route('blog', function () {
    this.route('post', { path: ':post_slug' }, function () { });
  });

  // adminRouter(this);

  this.route('events', function() {
    this.route('list', { path: ':event_slug' }, function() {});

  });
  this.route('exhibitions', function () {});


  this.route('admin', function () {
    this.route('blog', function () {
      this.route('post', function() {});
    });
    this.route('post', { path: '/post/:post_id' }, function () { });
    this.route('pages', function () {
      this.route('edit', { path: ':page_id' });
      this.route('new');
    });

    this.route('events', function () {
      this.route('edit', {
        path: '/edit/:event_id'
      }, function () {
        this.route('images', function () {
          this.route('edit', {
            path: '/edit/:image_id'
          });
          this.route('new');
        });
      });
      this.route('new');

      this.route('list', {
        path: ':event_slug'
      });
    });

    this.route('artists', function () {
      this.route('new');
    });
    this.route('artist', { path: '/artist/:artist_id' }, function () {
      //this.route('index', function () {});
      this.route('images', function () {
        this.route('new');
        this.route('edit', { path: '/image/:image_id/edit' });
      });
      this.route('exhibitions', function () {
        this.route('edit', { path: 'exhibition/:exhibition_id/edit'});
      });

      this.route('exhibition', function() {
        this.route('edit', { path: ':exhibition_id/edit'});
      });
      this.route('bio');
      this.route('image');
      this.route('press');
      this.route('statement');
    });

    this.route('page', {
      path: '/page/:page_id'
    });


    this.route('posts', function () {
      this.route('new');
    });
    this.route('users', function() {
      this.route('edit', {
        path: '/user/:user_id/edit'
      });
      this.route('new');
    });
    this.route('images');
  });
  // route for dynamic pages
  this.route('catchall', { path: '/*slug' });

  this.route('event');
  this.route('loading');
  this.route('user');
});
