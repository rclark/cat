var test = require('tape');
var cat = require('..');

for (var i = 0; i < 10000; i++) {
  test('starts with k', function(assert) {
    var str = cat();
    assert.equal(str[0], 'k', 'starts with k');
    assert.end();
  });
}
