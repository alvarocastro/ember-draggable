/**
 * Insert an item to an array in the specified index.
 * @param {Array} arr
 * @param {Number} index
 * @param {any} item
 * @returns {Array} []
 */
export function insertAt(arr, index, item) {
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
export function removeAt(arr, index) {
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
export function insertBefore(arr, targetItem, item) {
  return insertAt(arr, arr.indexOf(targetItem), item);
}

/**
 * Insert an item to an array placed after a given item.
 * @param {Array} arr
 * @param {any} targetItem
 * @param {any} item
 * @return {Array} []
 */
export function insertAfter(arr, targetItem, item) {
  return insertAt(arr, arr.indexOf(targetItem) + 1, item);
}

/**
 * Remove an item from an array.
 * @param {Array} arr
 * @param {any} item
 * @return {Array} []
 */
export function removeItem(arr, item) {
  return removeAt(arr, arr.indexOf(item));
}
