/*
Quicksort (sometimes called partition-exchange sort) is an efficient sorting algorithm. When implemented well, it can be about two or three times faster than its main competitors, merge sort and heapsort.

It is a comparison sort, meaning that it can sort items of any type for which a “less-than” relation is defined.

Quicksort uses these steps.

Choose any element of the array to be the pivot. There are multiple ways of selecting a pivot; explore the options and note their advantages.

Divide all other elements (except the pivot) into two partitions.

All elements less than the pivot must be in the first partition.

All elements greater than the pivot must be in the second partition.

Recursively apply the above process to the two partitions

Join the first sorted partition, the pivot, and the second sorted partition.

The best pivot creates partitions of equal length (or lengths differing by 1). The worst pivot creates an empty partition (for example, if the pivot is the first or last element of a sorted array).
*/

//==========================================
//                Chad
//==========================================

function quickSortChad(arr) {
//                        ༼ つ ◕_◕ ༽つ
  const left = [];
  const right = [];
  const pivot = arr[0];
  if (arr.length === 0) {
    return [];     //termination case
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);   // base case
  }
  return quickSort(left).concat(pivot, quickSort(right));//recursive

}

//==========================================
//                Hoare
//==========================================

function partitionHoare(items, left, right) {
    const pivot   = items[Math.floor((right + left) / 2)];  //Find the pivot item, this uses Math.floor to always pick the center right item
    let itemLeft = left;
    let itemRight = right;  //pointers for the left and right items 
    let temp;              //temp variable for swaping later
    while (itemLeft <= itemRight) {
        while (items[itemLeft] < pivot) {  //while left value is less than pivot, move right
            itemLeft++;
        }
        while (items[itemRight] > pivot) {  //while right item is greater than pivot, move left
            itemRight--;
        }
        if (itemLeft <= itemRight) {  //if left is less than or equal to right, swap the values
           temp = items[itemLeft];
           items[itemLeft] = items[itemRight];
           items[itemRight] = temp;
            itemLeft++;
            itemRight--;           //move each pointer one more position, if they don't meet, go back to step one.
        }
    }
    return itemLeft;
}

function quickSortHoare(arr, left, right) {
 let index;
 if (arr.length > 1) {
     left = typeof left != "number" ? 0 : left;                //left and right assignemnt if not passed to function
     right = typeof right != "number" ? arr.length - 1 : right;
     index = partitionHoare(arr, left, right);         //call to partition the index amount
     if (left < index - 1) {    //If left is less than the returned index minus 1, there are still items on the left to be sorted and quickSort() is called recursively on those items. 
         quickSort(arr, left, index - 1);    
     }
     if (index < right) {    //if index is less than the right pointer then there are still items on the right to sort. 
         quickSort(arr, index, right);
     }
 }
 return arr;   //the array is returned as the result.
}
//==========================================
//                Lomuto
//==========================================
function partitionLomuto(array, left, right) {
  const pivot = right;
  let i = left;
  let j;
  let temp;

  for(j = left; j < right; j++) {
    if(array[j] <= array[pivot]) {
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      i = i + 1;
    }
  }
  temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return i;
}

function quickSortLomuto(arr, left, right) {
 let index;
 if (arr.length > 1) {
     left = typeof left != "number" ? 0 : left;
     right = typeof right != "number" ? arr.length - 1 : right;
     index = partitionLomuto(arr, left, right);
     if (left < index - 1) {
         quickSort(arr, left, index - 1);
     }
     if (index < right) {
         quickSort(arr, index, right);
     }
 }
 return arr;
}

const quickSort = quickSortChad;
//const quickSort = quickSortHoare;
//const quickSort = quickSortLomuto;

function assert(passingTest, discriptionOf) {
  return !passingTest ? discriptionOf : 'Test Passed';
}

function compareArray(one, two) {
  return JSON.stringify(one) === JSON.stringify(two);
}
const testArray = [8, 12, 5, 19, 2, 4, 11, 10];
const testArray2 = [ 2, 4, 5, 8, 10, 11, 12, 19 ];
console.log(assert(compareArray(quickSort(testArray), testArray2), "quickSort should sort the array, try again"));