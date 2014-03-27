'use strict';

var assert = require('assert');
var dropWhile = require('./');
var is = require('is-predicate');

describe('dropWhile', function() {
  it('should drop till negative numbers stop', function() {
    var arr = [-1, -2, -6, -7, 1, 2, 3, 4, -5, -6, 0, 1];
    var expect = [1, 2, 3, 4, -5, -6, 0, 1];
    assert.deepEqual(dropWhile(arr, is.neg), expect);
  });
});
