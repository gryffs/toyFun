import alphabeticAnagrams from '../src/alphabeticAnagrams';

describe('alphabeticAnagrams', () => {
  test('will find the location for "CHAD"', () => {
    expect(alphabeticAnagrams('CHAD')).toEqual(11);
  });
  test('will find the location for "GRIFFIS"', () => {
    expect(alphabeticAnagrams('GRIFFIS')).toEqual(493);
  });
  test('will find the location for "MISSISSIPPI"', () => {
    expect(alphabeticAnagrams('MISSISSIPPI')).toEqual(13737);
  });
});