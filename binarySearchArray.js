/*
Find the index of a target value in a sorted array of integers using a binary
search algorithm.
*/
const assert = (passingTest, discriptionOf) => {
  return !passingTest ? discriptionOf : 'Test Passed';
};

const binarySearch = (array, target) => {
  let track = 0;
  let end = array.length;
  let middle;
  while(track < end) {
    middle = Math.floor((track + end) / 2);
    if(array[middle] === target) return middle;
    array[middle] < target ? track = middle + 1 : end = middle;
  }
  return -1;
};

console.log(assert(binarySearch([2], 1) === -1, 'Should return -1 on a basic array without the target'));
console.log(assert(binarySearch([3, 4, 5, 6, 7, 8, 9, 10, 11], 10) === 7, 'Should find the index in a basic array'));
console.log(assert(binarySearch([3, 4, 5, 6, 7, 8, 9, 10, 11], 12) === -1, 'Should return -1 on a basic array without the target'));
console.log(assert(binarySearch([-9, -8, -7, -6, -5, -4, -3], -3) === 6, 'Should find the index in a negative array'));
console.log(assert(binarySearch([-12, -3, 0, 11, 13, 55, 67], -3) === 1, 'Should find the index in a mixed array'));
console.log(assert(binarySearch([-12, -3, 0, 11, 13, 55, 67], -8) === -1, 'Should return -1 on a mixed array without the target'));
