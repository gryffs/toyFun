import allAnagrams from '../src/allAnagrams';

const testArray = [ "abc", "acb", "bac", "bca", "cab", "cba" ];

describe('allAnagrams', () => {
  test('will return an array with only one letter', () => {
    expect(allAnagrams('a')).toEqual(['a']);
  });
  test('will find all possible letter combinations', () => {
    expect(allAnagrams('abc')).toEqual(testArray);
  });
});