var test = require('tape');
var cat = require('..');

for (var i = 0; i < 10000; i++) {
  test('starts with c', function(assert) {
    var str = cat();
    assert.equal(str[0], 'c', 'starts with c');
    assert.end();
  });
}
