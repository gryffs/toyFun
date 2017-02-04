import binarySearchArray from '../src/binarySearchArray';

describe('binarySearchArray', () => {
  test('will return -1 on a basic array without the target', () => {
    expect(binarySearchArray([2], 1)).toEqual(-1);
  });
  test('will find the index in a basic array', () => {
    expect(binarySearchArray([3, 4, 5, 6, 8, 9, 10, 11], 10)).toEqual(6);
  });
  test('will return -1 on a basic array without the target', () => {
    expect(binarySearchArray([3, 4, 5, 6, 7, 8, 9, 10, 11], 12)).toEqual(-1);
  });
  test('will find the index in a negative array', () => {
    expect(binarySearchArray([-9, -8, -7, -6, -5, -4, -3], -3)).toEqual(6);
  });
  test('will find the index in a mixed array', () => {
    expect(binarySearchArray([-12, -3, 0, 11, 13, 55, 67], -3)).toEqual(1);
  });
  test('will return -1 on a mixed array without the target', () => {
    expect(binarySearchArray([-12, -3, 0, 11, 13, 55, 67], -8)).toEqual(-1);
  });
});
