import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  coalesceFindRequests: true,
  namespace: 'api/v1',
  //enable web sockets?
  useCSRF:              true,
  defaultSerializer:    '-rest',
  //this is dependent on production/development environment
  //It is configured in config/environment.js
  //host: ClientENV.hostUrl
  //add IP from $DOCKER_HOST if --docker flag is set
  //host: 'http://192.168.59.103:1337'


});