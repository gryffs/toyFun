/*
Given a number of rounds n, return an array of all the possible rock-paper-scissors
play possibilities for that number of rounds.

ex:
number of rounds: 2
return: [ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]
*/

function rockPaperPermutation (roundCount) {
  const results = [];
  const rps = ['r', 'p', 's'];
  
  if(!roundCount) {
    return results;
  }
  
  letsPlay('');  // start with the empty string
  return results;
  
  function letsPlay(plays) {
    if(plays.length === roundCount) {
      results.push(plays);  // when each string is the same length
      return;             // as the count, push the string and return
    }
    for(let i = 0; i < rps.length; i++) { //loops through the rps array
      letsPlay(plays + rps[i]);   //running each possible rps plus the existing
    }                             // string recursively.
  }
}

function assert (passingTest, discriptionOf) {
  return !passingTest ? discriptionOf : 'Test Passed';
}

function compareArray(one, two) {
  return JSON.stringify(one) === JSON.stringify(two);
}
const testArray = [ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ];
console.log(assert(compareArray(rockPaperPermutation(2), testArray), "Should return all the possible plays."));