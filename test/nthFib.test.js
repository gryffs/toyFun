import { nthFib, nthFibRecursion } from '../src/nthFib';

describe('nthFib', () => {
  test('will return 0 for 0', () => {
    expect(nthFib(0)).toEqual(0);
  });
  test('will return 0 for 1', () => {
    expect(nthFib(1)).toEqual(0);
  });
  test('will return 1 for 2', () => {
    expect(nthFib(2)).toEqual(1);
  });
  test('will return 1 for 3', () => {
    expect(nthFib(3)).toEqual(1);
  });
  test('will return 2 for 4', () => {
    expect(nthFib(4)).toEqual(2);
  });
  test('will return 3 for 5', () => {
    expect(nthFib(5)).toEqual(3);
  });
  test('will return 4181 for 20', () => {
    expect(nthFib(20)).toEqual(4181);
  });
  test('will return 317811 for 29', () => {
    expect(nthFib(29)).toEqual(317811);
  });
});

describe('nthFibRecursion', () => {
  test('will return 0 for 0', () => {
    expect(nthFibRecursion(0)).toEqual(0);
  });
  test('will return 0 for 1', () => {
    expect(nthFibRecursion(1)).toEqual(0);
  });
  test('will return 1 for 2', () => {
    expect(nthFibRecursion(2)).toEqual(1);
  });
  test('will return 1 for 3', () => {
    expect(nthFibRecursion(3)).toEqual(1);
  });
  test('will return 2 for 4', () => {
    expect(nthFibRecursion(4)).toEqual(2);
  });
  test('will return 3 for 5', () => {
    expect(nthFibRecursion(5)).toEqual(3);
  });
  test('will return 4181 for 20', () => {
    expect(nthFibRecursion(20)).toEqual(4181);
  });
  test('will return 317811 for 29', () => {
    expect(nthFibRecursion(29)).toEqual(317811);
  });
});