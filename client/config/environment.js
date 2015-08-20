/* jshint node: true */

var devProtocol = 'http://';
var devHost = 'localhost:1337';
var prodProtocol = 'http://';
var prodHost = 'gallery.hairbrain.io';
var devS3 = 'gallery13-dev.s3.amazonaws.com';
var prodS3 = 'gallery13.s3.amazonaws.com';
const DEBUG_GA = false;
const GA_ID= 'UA-12392326-1';

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'client',
    podModulePrefix: 'client/pods',
    environment: environment,
    isProduction: (this.environment === 'production'),
    baseURL: '/',
    locationType: 'auto',
    filepickerKey: 'AE6BMl44qQ4i8X7IDFok5z',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    if (DEBUG_GA) {
      ENV.googleAnalyticsId = GA_ID;
    }
    ENV.hostUrl = devProtocol + devHost;
    //ENV.APP.LOG_RESOLVER = true;
    //ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.contentSecurityPolicy = {
      'default-src': "'none'",
      // add the domain here like analytics.google.com or data: or 'self'
      'script-src':  "'self' 'unsafe-eval' 'unsafe-inline' www.google.com www.google-analytics.com api.filepicker.io",
      'font-src':    "'self' data:",
      'connect-src': "'self' www.filepicker.io " + devHost + ' ' + devS3,
      'img-src':     "'self' data: " + devHost + ' ' + devS3 + ' www.google-analytics.com filepicker.io www.filepicker.io s3.amazonaws.com',
      'style-src':   "'self' 'unsafe-inline'",
      'frame-src':   "www.google.com *.filepicker.io",
      'media-src': "www.google.com"
    }
  }
  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.hostUrl = prodProtocol + prodHost;
    ENV.googleAnalyticsId = GA_ID;

    ENV.contentSecurityPolicy = {
      'default-src': "'none'",
      // add the domain here like analytics.google.com or data: or 'self'
      'script-src':  "'self' 'unsafe-eval' 'unsafe-inline' www.google.com www.google-analytics.com api.filepicker.io",
      'font-src':    "'self' data:",
      'connect-src': "'self' www.filepicker.io " + prodHost + ' ' + prodS3,
      'img-src':     "'self' data: " + prodHost + ' ' + prodS3 + ' www.google-analytics.com filepicker.io s3.amazonaws.com',
      'style-src':   "'self' 'unsafe-inline'",
      'frame-src':   "www.google.com *.filepicker.io",
      'media-src': "www.google.com"
    }
  }

  ENV['simple-auth'] = {
    authorizer: "simple-auth-authorizer:oauth2-bearer",
    crossOriginWhitelist: [ENV.hostUrl],
    routeAfterAuthentication: "/admin"
  };

  ENV['simple-auth-oauth2'] = {
    serverTokenEndpoint: ENV.hostUrl + "/api/v1/auths/login",
    serverTokenRevocationEndpoint: ENV.hostUrl + "/api/v1/auths/logout"
  };

  return ENV;
};
