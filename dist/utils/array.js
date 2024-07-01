import { assert } from '@ember/debug';

/**
 * Insert an item to an array in the specified index.
 * @param {Array} arr
 * @param {Number} index
 * @param {any} item
 * @returns {Array} []
 */
function insertAt(arr, index, item) {
  const clone = [...arr];
  clone.splice(index, 0, item);
  return clone;
}

/**
 * Remove an item from an array in the specified index.
 * @param {Array} arr
 * @param {Number} index
 * @returns {Array} []
 */
function removeAt(arr, index) {
  const clone = [...arr];
  clone.splice(index, 1);
  return clone;
}

/**
 * Insert an item to an array placed before a given item.
 * @param {Array} arr
 * @param {any} targetItem
 * @param {any} item
 * @return {Array} []
 */
function insertBefore(arr, targetItem, item) {
  const index = arr.indexOf(targetItem);
  assert('Item must exist', index >= 0);
  return insertAt(arr, index, item);
}

/**
 * Insert an item to an array placed after a given item.
 * @param {Array} arr
 * @param {any} targetItem
 * @param {any} item
 * @return {Array} []
 */
function insertAfter(arr, targetItem, item) {
  const index = arr.indexOf(targetItem);
  assert('Item must exist', index >= 0);
  return insertAt(arr, index + 1, item);
}

/**
 * Remove an item from an array.
 * @param {Array} arr
 * @param {any} item
 * @return {Array} []
 */
function removeItem(arr, item) {
  const index = arr.indexOf(item);
  assert('Item must exist', index >= 0);
  return removeAt(arr, index);
}

export { insertAfter, insertAt, insertBefore, removeAt, removeItem };
//# sourceMappingURL=array.js.map
