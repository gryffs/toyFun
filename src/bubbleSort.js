/*
Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:

If the first element is greater than the second element, it swaps the two.
It then compares the second to the third, and the third to the fourth, and so on.
In this way, the largest values ‘bubble’ to the end of the array.
Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
Implement a function that takes an array and sorts it using this technique.
*/

function bubbleSort(input) {
  const arr = input.slice();
  let swap = true;
  let temp;
  while(swap) {
    swap = false;
    for(let i = 1; i < arr.length; i++) {
      if(arr[i] < arr[i - 1]) {
        temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
        swap = true;
      }
    }
  }
  return arr;
}

function assert(passingTest, discriptionOf) {
  return !passingTest ? discriptionOf : 'Test Passed';
}

function compareArray(one, two) {
  return JSON.stringify(one) === JSON.stringify(two);
}
const testArray = [8, 12, 5, 19, 2, 4, 11, 10];
const testArray2 = [ 2, 4, 5, 8, 10, 11, 12, 19 ];
console.log(assert(compareArray(bubbleSort(testArray), testArray2), "bubbleSort should sort the array, try again"));
