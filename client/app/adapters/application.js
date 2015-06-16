import DS from 'ember-data';
import config from 'client/config/environment';

export default DS.RESTAdapter.extend({
  coalesceFindRequests: true,
  namespace           : 'api/v1',
  //enable web sockets?
  useCSRF             : true,
  defaultSerializer   : '-rest',
  //this is dependent on production/development environment
  //It is configured in config/environment.js
  host                : config.hostUrl



});
