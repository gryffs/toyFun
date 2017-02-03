import arrayception from '../src/arrayception';

describe('arrayception', () => {
  test('will be 0 if no elements are found', () => {
    expect(arrayception([[[]]])).toEqual(0);
  });
  test('will be 1 for one level deep', () => {
    expect(arrayception([1])).toEqual(1);
  });
  test('will be 2 for two levels deep', () => {
    expect(arrayception([[1]])).toEqual(2);
  });
  test('will find the greatest depth', () => {
    expect(arrayception([[1], 2, [9, [99, [90]]], 5])).toEqual(4);
  });
});