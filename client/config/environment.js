/* jshint node: true */

const DEBUG_GA = false;
const GA_ID= 'UA-12392326-1';

const HOST_DEV = 'http://localhost:1337';
const HOST_PROD = 'http://gallery.hairbrain.io';
const S3_DEV = 'https://gallery13-dev.s3.amazonaws.com';
const S3_PROD = 'https://gallery13.s3.amazonaws.com';

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
    ENV.hostUrl = HOST_DEV;
    if (DEBUG_GA) {
      ENV.googleAnalyticsId = GA_ID;
    }
    //ENV.APP.LOG_RESOLVER = true;
    //ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.contentSecurityPolicy = {
      'default-src': "'none'",
      // add the domain here like analytics.google.com or data: or 'self'
      'script-src':  "'self' 'unsafe-eval' 'unsafe-inline' www.google.com www.google-analytics.com",
      'font-src':    "'self' data:",
      'connect-src': "'self' " + HOST_DEV + ' ' + S3_DEV,
      'img-src':     "'self' data: " + HOST_DEV + ' ' + S3_DEV + ' www.google-analytics.com',
      'style-src':   "'self' 'unsafe-inline'",
      'frame-src':   "www.google.com",
      'media-src':   "www.google.com"
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
    ENV.hostUrl = HOST_PROD;
    ENV.googleAnalyticsId = GA_ID;

    ENV.contentSecurityPolicy = {
      'default-src': "'none'",
      // add the domain here like analytics.google.com or data: or 'self'
      'script-src':  "'self' 'unsafe-eval' 'unsafe-inline'  www.google.com www.google-analytics.com",
      'font-src':    "'self' data:",
      'connect-src': "'self' " + HOST_PROD + ' ' + S3_PROD,
      'img-src':     "'self' data: " + HOST_PROD + ' ' + S3_PROD + ' www.google-analytics.com',
      'style-src':   "'self' 'unsafe-inline'",
      'frame-src':   "www.google.com",
      'media-src':   "www.google.com"
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
