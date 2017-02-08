import waterBlocks from '../src/waterBlocks';

describe('waterBlocks', () => {
  test('will work for a basic array', () => {
    expect(waterBlocks([3, 2, 1, 4])).toEqual(3);
  });
  test('will work for more complicated', () => {
    expect(waterBlocks([5, 2, 3, 2, 1, 3])).toEqual(4);
  });
  test('will not count blocks on the ends', () => {
    expect(waterBlocks([1, 2, 3, 2, 1])).toEqual(0);
  });
  test('will work for even more complicated', () => {
    const testArray = [1, 4, 1, 3, 1, 5, 3, 1, 4, 3, 1, 2, 3, 2, 2, 3, 4];
    expect(waterBlocks(testArray)).toEqual(23);
  });
});