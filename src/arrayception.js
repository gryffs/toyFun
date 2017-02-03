/*
Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
*/

function arrayception (array) {
  let maxDepth = 0;
  arrayHunter(array, 1);
  
  function arrayHunter (array, depth) {
    array.forEach(item => {
      
      if(!Array.isArray(item)) {  // check if item is an array
        if (depth > maxDepth) {  // if not, check to see if our depth is greater
          maxDepth = depth;     // change maxDepth to reflect our findings
        }
      } else {  // continue to look adding 1 to the depth
      arrayHunter(item, depth + 1);
      }
    })
  }
  return maxDepth;
}

arrayHunter([ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]); // => 4
arrayHunter([[[]]]); // => 0
