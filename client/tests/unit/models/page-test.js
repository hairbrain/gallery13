import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('page', {
  // Specify the other units that are required for this test.
  // needs: []
  integration: true
});

test('it exists', function (assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
