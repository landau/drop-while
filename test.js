"use strict";

const assert = require("assert");
const dropWhile = require("./");

const isNegative = (n) => n < 0;

const arr = [-1, -2, -6, -7, 1, 2, 3, 4, -5, -6, 0, 1];
const expect = [1, 2, 3, 4, -5, -6, 0, 1];
assert.deepEqual(
  dropWhile(arr, isNegative),
  expect,
  "should drop till negative numbers stop"
);
