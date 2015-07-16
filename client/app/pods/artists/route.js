import Ember from 'ember';

export default Ember.Route.extend({
    titleToken: 'Artists',
    model: function () {
        return this.store.find('artist', {sort: 'order asc'});
    }
});
