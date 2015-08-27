# cat

Randomly generates strings that start with `c`.

```js
var cat = require('cat');
var assert = require('assert');
var id = cat();

assert.equal(id[0], 'c', 'starts with c');
```
