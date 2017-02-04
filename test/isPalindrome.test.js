import isPalindrome from '../src/isPalindrome';

describe('isPalindrome', () => {
  test('will return false if the passed in string is not a palindrome', () => {
    expect(isPalindrome('monkey')).toBeFalsy();
  });
  test('will return true if the passed in string is a palindrome', () => {
    expect(isPalindrome('tacocat')).toBeTruthy();
  });
  test('will work for sentences with matching spaces', () => {
    expect(isPalindrome('Rats live on no evil star')).toBeTruthy();
  });
});
