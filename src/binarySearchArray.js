/*
Find the index of a target value in a sorted array of integers using a binary
search algorithm.
*/

const binarySearch = function binarySearch(array, target) {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    let mid = (low + high) / 2 | 0;
    let midVal = array[mid];
    if (midVal < target) {
      low = mid + 1;
    } else if (midVal > target) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

export default binarySearch;
