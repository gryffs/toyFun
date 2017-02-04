const isPalindrome = function isPalindrome (palString) {
  return palString.toLowerCase() === palString.toLowerCase().split('').reverse().join('');
}

export default isPalindrome;
