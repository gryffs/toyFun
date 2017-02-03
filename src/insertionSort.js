/*
Insertion sort is a basic sorting algorithm.

Insertion sort iterates over an array, growing a sorted array behind the current location. It takes each element from the input and finds the spot, up to the current point, where that element belongs (in constant space). It does this until it gets to the end of the array.

Insertion sort should be implemented as a stable sort. This means that equal elements
should retain their relative order. Numbers, as primitives, give us no way to check this,
so we’ll be sorting objects with a value field, on which they will be sorted, like so:

[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]

A stable sort must return {value: 5, order: 1}, {value:5, order: 2} in that order.
*/

function insertionSort (array) {
  var temp;
  
  for (var i = 0; i < array.length; i++) {
    temp = array[i];
    
    for (var j = i - 1; j > -1 && (array[j].value > temp.value); j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }

  return array;
}

function assert(passingTest, discriptionOf) {
  return !passingTest ? discriptionOf : 'Test Passed';
}

function compareArray(one, two) {
  return JSON.stringify(one) === JSON.stringify(two);
}

function testArrayBuilder(max, length = max) {
  var testArr = [];
  while(length) {
    var random = Math.floor(Math.random() * (max + 1));
    testArr.push({value : random});
    length--;
  }
  return testArr;
}

function addAlphabet() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const results = testArrayBuilder(5, alphabet.length);

  for (let i = 0; i < results.length; i++) {
    results[i].alpha = alphabet[i];
  }

  return results;
}

const testArray = testArrayBuilder(20);
const testArray2 = testArray.slice().sort((a, b) => {return a.value - b.value;});
const testArray3 = [{value: 11 , name: 'Bob'}, {value: 11 , name: 'Carl'}, {value: 8 , name: 'Chad'}, {value: 7 , name: 'Dan'}];
const testArray4 = [{value: 7 , name: 'Dan'}, {value: 8 , name: 'Chad'}, {value: 11 , name: 'Bob'}, {value: 11 , name: 'Carl'}];
console.log(assert(compareArray(insertionSort(testArray), testArray2), "insertionSort should sort the array, try again"));
console.log(assert(compareArray(insertionSort(testArray3), testArray4), "insertionSort should be a stable sort, try again"));