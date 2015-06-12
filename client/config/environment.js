/* jshint node: true */

var devHost = 'http://localhost:1337';
var prodHost = 'http://localhost:1337';

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'client',
    environment: environment,
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
    ENV.hostUrl = devHost;
    //ENV.APP.LOG_RESOLVER = true;
    //ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.contentSecurityPolicy = {
      'default-src': "'none'",
      'script-src':  "'self' 'unsafe-eval'", // add the domain here like analytics.google.com or whatver it is reaching there
      'font-src':    "'self'",
      'connect-src': "'self' " + devHost,
      'img-src':     "'self' data: " + devHost,
      'style-src':   "'self' 'unsafe-inline'",
      'frame-src':   "'none'"
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
    ENV.hostUrl = prodHost;
    ENV.contentSecurityPolicy = {
      'default-src': "'none'",
      'script-src':  "'self' 'unsafe-eval'", // add the domain here like analytics.google.com or whatver it is reaching there
      'font-src':    "'self'",
      'connect-src': "'self' " + prodHost,
      'img-src':     "'self' data: " + prodHost,
      'style-src':   "'self' 'unsafe-inline'",
      'frame-src':   "'none'"
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
