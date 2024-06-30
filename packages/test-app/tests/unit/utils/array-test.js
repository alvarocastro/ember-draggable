import { module, test } from 'qunit';
import {
  insertAt,
  removeAt,
  insertBefore,
  insertAfter,
  removeItem,
} from 'ember-draggable-modifiers/utils/array';

const baseArr = ['one', 'two', 'three', 'four', 'five'];

module('Unit | Utils | array', function () {
  test('insertAt: Inserts at middle index', function (assert) {
    const arr = [...baseArr];
    const newArr = insertAt(arr, 2, 'NEW!');
    assert.deepEqual(newArr, ['one', 'two', 'NEW!', 'three', 'four', 'five']);
  });
  test('insertAt: Inserts at start index', function (assert) {
    const arr = [...baseArr];
    const newArr = insertAt(arr, 0, 'NEW!');
    assert.deepEqual(newArr, ['NEW!', 'one', 'two', 'three', 'four', 'five']);
  });
  test('insertAt: Inserts at last index', function (assert) {
    const arr = [...baseArr];
    const newArr = insertAt(arr, 5, 'NEW!');
    assert.deepEqual(newArr, ['one', 'two', 'three', 'four', 'five', 'NEW!']);
  });
  test('insertAt: does not mutate the array', function (assert) {
    const arr = [...baseArr];
    const newArr = insertAt(arr, 2, 'NEW!');
    assert.notDeepEqual(newArr, arr);
  });

  test('removeAt: Removes at middle index', function (assert) {
    const arr = [...baseArr];
    const newArr = removeAt(arr, 2);
    assert.deepEqual(newArr, ['one', 'two', 'four', 'five']);
  });
  test('removeAt: Removes at start index', function (assert) {
    const arr = [...baseArr];
    const newArr = removeAt(arr, 0);
    assert.deepEqual(newArr, ['two', 'three', 'four', 'five']);
  });
  test('removeAt: Removes at last index', function (assert) {
    const arr = [...baseArr];
    const newArr = removeAt(arr, 4);
    assert.deepEqual(newArr, ['one', 'two', 'three', 'four']);
  });
  test('removeAt: does not mutate the array', function (assert) {
    const arr = [...baseArr];
    const newArr = removeAt(arr, 2);
    assert.notDeepEqual(newArr, arr);
  });

  test('insertBefore: inserts near the middle', function (assert) {
    const arr = [...baseArr];
    const newArr = insertBefore(arr, 'three', 'NEW!');
    assert.deepEqual(newArr, ['one', 'two', 'NEW!', 'three', 'four', 'five']);
  });
  test('insertBefore: inserts at the beginning', function (assert) {
    const arr = [...baseArr];
    const newArr = insertBefore(arr, 'one', 'NEW!');
    assert.deepEqual(newArr, ['NEW!', 'one', 'two', 'three', 'four', 'five']);
  });
  test('insertBefore: does not mutate the array', function (assert) {
    const arr = [...baseArr];
    const newArr = insertBefore(arr, 'three', 'NEW!');
    assert.notDeepEqual(newArr, arr);
  });
  test("insertBefore: throws an error if the reference item doesn't exists", function (assert) {
    const arr = [...baseArr];
    assert.throws(() => insertBefore(arr, 'ten', 'NEW!'));
  });

  test('insertAfter: inserts near the middle', function (assert) {
    const arr = [...baseArr];
    const newArr = insertAfter(arr, 'three', 'NEW!');
    assert.deepEqual(newArr, ['one', 'two', 'three', 'NEW!', 'four', 'five']);
  });
  test('insertAfter: inserts at the end', function (assert) {
    const arr = [...baseArr];
    const newArr = insertAfter(arr, 'five', 'NEW!');
    assert.deepEqual(newArr, ['one', 'two', 'three', 'four', 'five', 'NEW!']);
  });
  test('insertAfter: does not mutate the array', function (assert) {
    const arr = [...baseArr];
    const newArr = insertAfter(arr, 'three', 'NEW!');
    assert.notDeepEqual(newArr, arr);
  });
  test("insertAfter: throws an error if the reference item doesn't exists", function (assert) {
    const arr = [...baseArr];
    assert.throws(() => insertAfter(arr, 'ten', 'NEW!'));
  });

  test('removeItem: removes near the middle', function (assert) {
    const arr = [...baseArr];
    const newArr = removeItem(arr, 'three');
    assert.deepEqual(newArr, ['one', 'two', 'four', 'five']);
  });
  test('removeItem: removes at the start', function (assert) {
    const arr = [...baseArr];
    const newArr = removeItem(arr, 'one');
    assert.deepEqual(newArr, ['two', 'three', 'four', 'five']);
  });
  test('removeItem: removes at the end', function (assert) {
    const arr = [...baseArr];
    const newArr = removeItem(arr, 'five');
    assert.deepEqual(newArr, ['one', 'two', 'three', 'four']);
  });
  test('removeItem: does not mutate the array', function (assert) {
    const arr = [...baseArr];
    const newArr = removeItem(arr, 'three');
    assert.notDeepEqual(newArr, arr);
  });
  test("removeItem: throws an error if the reference item doesn't exists", function (assert) {
    const arr = [...baseArr];
    assert.throws(() => removeItem(arr, 'ten'));
  });
});
