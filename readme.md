# cat

[![Build Status](https://travis-ci.org/rclark/cat.svg?branch=master)](https://travis-ci.org/rclark/cat)

![cat](https://cloud.githubusercontent.com/assets/515424/9673951/4eeb8fb6-525f-11e5-8683-a62bc612865d.jpg)

Randomly generates strings that start with `c`.

```js
var cat = require('cat');
var assert = require('assert');
var id = cat();

assert.equal(id[0], 'c', 'starts with c');
```
