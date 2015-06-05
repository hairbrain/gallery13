import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('image', {
  // Specify the other units that are required for this test.
  // needs: ['model:artist']
  integration: true
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
