[![Build Status](https://travis-ci.org/landau/drop-while.svg)](https://travis-ci.org/landau/drop-while)

drop-while
==========

Returns an array of the items in coll starting from the first item for which pred(item) logical false, i.e. false, null, undefined

```js
function dropWhile(coll, pred, ctx) {}
```

## Install

`npm i -S drop-while`

## Usage

```js
var assert = require('assert');
var dropWhile = require('./');
var is = require('is-predicate');

var arr = [-1, -2, -6, -7, 1, 2, 3, 4, -5, -6, 0, 1];
var expect = [1, 2, 3, 4, -5, -6, 0, 1];
assert.deepEqual(dropWhile(arr, is.neg), expect); // true
```

