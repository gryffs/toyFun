import powerSet from '../src/powerSet';

describe('powerSet', () => {
  test('will return an array with only two elements when given a string of one', () => {
    expect(powerSet('a')).toEqual(['', 'a']);
  });
  test('will work for a string with two items', () => {
    expect(powerSet('ab')).toEqual(['', 'a', 'ab', 'b']);
  });
  test('will work for horse', () => {
    expect(powerSet('horse')).toEqual([ "", "e", "eh", "eho", "ehor", "ehors", "ehos", "ehr", "ehrs", "ehs", "eo", "eor", "eors", "eos", "er", "ers", "es", "h", "ho", "hor", "hors", "hos", "hr", "hrs", "hs", "o", "or", "ors", "os", "r", "rs", "s" ]);
  });
  test('will ignore duplicates', () => {
    expect(powerSet('abb')).toEqual(['', 'a', 'ab', 'b']);
  });
});
