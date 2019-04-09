'use strict';

const assert = require('assert');
const predicate = require('predicate');
const { describe, it } = require('mocha');
const dropWhile = require('./');

describe('dropWhile', () => {
  it('should drop till negative numbers stop', () => {
    const arr = [-1, -2, -6, -7, 1, 2, 3, 4, -5, -6, 0, 1];
    const expect = [1, 2, 3, 4, -5, -6, 0, 1];
    assert.deepEqual(dropWhile(arr, predicate.neg), expect);
  });
});
