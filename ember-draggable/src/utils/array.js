/**
 * Insert an item to an array in the specified index
 * @param {Array} arr
 * @param {Number} index
 * @param {any} item
 * @returns {Array} []
 */
export function insertAt (arr, index, item) {
  const clone = [ ...arr ];
  clone.splice(index, 0, item)
  return clone;
}

/**
 * Insert an item to an array in the specified index
 * @param {Array} arr
 * @param {Number} index
 * @returns {Array} []
 */
export function removeAt (arr, index) {
  const clone = [ ...arr ];
  clone.splice(index, 1);
  return clone;
}

export function insertBefore (arr, targetItem, item) {
  return insertAt(arr, arr.indexOf(targetItem), item);
}

export function insertAfter (arr, targetItem, item) {
  return insertAt(arr, arr.indexOf(targetItem) + 1, item);
}

export function removeItem (arr, item) {
  return removeAt(arr, arr.indexOf(item));
}
