/*
Given an array of negative/positive integers, return the element in the center position of the array.

If the array has an even number of elements, return the average of the two middle elements instead.
*/

function middle (numbers) {
  var middle = numbers.length / 2;
  var floor = Math.floor(middle);
  if(floor === middle){
    return (numbers[middle] + numbers[middle - 1]) / 2;
  } else {
    return numbers[floor];
  }
}

middle([4, 5, 10, 12, 13]); // => 10
middle([103, 144, 150, 201]); // => 147
middle([-10, -8, -2, 0, 3]); // => -2
