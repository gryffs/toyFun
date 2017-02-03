//Create a function that takes two arrays and determine whether the second array
//is a subset of the first array. Arrays will only contain primitive values.

function isSubset (array, sub) {
  let test = array.slice();  // make a copy of the original array to work with
  
  for(i of sub) {
    if(test.includes(i)) {  // check to see if the test array contains the element in sub
      let ind = test.indexOf(i);  
      test.splice(ind, 1);  // if it does, remove the element and continue to loop
    } else {
      return false;  // if it does not, just retun false
    }
  }
  
  return true;  // return true if we make it out of the for loop
}

isSubset([ 2, 2, 2, 3, 4 ], [ 2, 4, 3 ]); // => true
isSubset([ 2, 3, 3, "a" ], [ 3, 3, 3, "a" ]); // => false
