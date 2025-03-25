'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const originalSort = [].__proto__.sort;

  [].__proto__.sort2 = function (compareFunction) {
    if (typeof compareFunction === 'function') {
      return originalSort.call(this, compareFunction);
    }

    return originalSort.call(this);
  };
}

module.exports = applyCustomSort;
