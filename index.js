'use strict';

function first(arr) {
  return arr[0];
}

function rest(arr) {
  return arr.slice(1);
}


/**
 * Returns an array of the items in coll starting from the first item
 * for which pred(item) logical false, i.e. false, null, undefined
 *
 * @param {Array} coll
 * @param {Function} pred
 * @param {Object} [ctx]
 *
 * @return {Array}
 */
module.exports = function dropWhile(coll, pred, ctx) {
  if (pred(first(coll))) {
    return dropWhile(rest(coll), pred, ctx);
  }

  return coll;
};
