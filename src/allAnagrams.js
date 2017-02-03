/*
Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array.
*/

function allAnagrams (string) {
  //  use an object to handle repeats from the recursive call below.
  const uniqueOutput = {};

  (function anagram (ana, str) { // IIFE FTW!
    // only save the combinations that use all the letter
    if (str === '') { uniqueOutput[ana] = 1; }

    for (let i = 0; i < str.length; i++) {
      // run through the string building every possible combination
      anagram(ana + str[i], str.slice(0, i) + str.slice(i + 1));
    }
  })('', string);
 
  let result = Object.keys(uniqueOutput);
  return result;
}
export default allAnagrams;
