/*
In an array of every possible anagram of a given string, what index would the original string occupy?

Here is the catch: Your function should be able to accept any word 20 letters or less in length
(possibly with some letters repeated), and take no more than 5000 milliseconds to run.
*/

function anagramPosition (string) {
  // I listed all possible factorials instead of calculating
  const factorial = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600, 6227020800, 87178291200, 1307674368000, 20922789888000, 355687428096000, 6402373705728000, 121645100408832000, 2432902008176640000, 51090942171709440000, 1124000727777607680000, 25852016738884976640000, 620448401733239439360000, 15511210043330985984000000];
  const frequency = {};
  const stringArr = string.split('');
  const sortedStringArr = string.split('').sort();
  let count = 0;
  let remaining = string.length - 1;
  let stringArrIndex = 0;
  
  sortedStringArr.forEach(x => {
    frequency[x] ? frequency[x]++ : frequency[x] = 1;
  });  // make an object with the frequency of each letter
  
  while (sortedStringArr.length) {
    for (let i = 0; i < sortedStringArr.length; i++) {
      if (sortedStringArr[i] !== stringArr[stringArrIndex]) {
        if (sortedStringArr[i] !== sortedStringArr[i+1]) {
          let permutations = factorial[remaining];  
          // stop and calculate permutations because we didn't match
          // and we are not on a repeated char.
          // check the comment below about the getPers function:
          count += permutations / getPers(frequency, sortedStringArr[i]);
        } else {
          // we continue here in the case that we are on the first
          // instance of a repeated char (we only need to calc one)
          continue;
        }
      } else {
        // we found a match!
        stringArrIndex++;  // move our index
        frequency[sortedStringArr[i]]--;  // decrease the frequency
        sortedStringArr.splice(i, 1);  // remove it from the array
        remaining--;  // decrease the remaining variable
        break;
      }
    }
  }
  
  return count + 1;
  
  // in order to deal with repeated chars, we must calculate all possible
  // permutations multiplied by one another that will later be the
  // denominator for all permutations sumed as the numerator
  function getPers(object, current) {  // this function gets all permutations
    object[current]--;        // based on the object and letter passed in
    let denominator = 1;
    for (var key in object) {
      let subPermutations = factorial[object[key]];
      denominator *= subPermutations;
    }
    object[current]++;
    return denominator;
  }
}

export default anagramPosition;
// anagramPosition('CHAD'); // => 11
// anagramPosition('GRIFFIS'); // => 493
// anagramPosition('MISSISSIPPI'); // => 13,737
