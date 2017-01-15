/*
You are given an input array where each element represents the height of a line of towers. 

The width of every tower is 1.
It starts raining. How much water is collected between the towers? 
Eg. Input: [5, 2, 3, 2, 1, 3]
Output: 4
Visualization:

'-' is water
 '#' is a block

#
#
# - # -  - #
# # # # - #
# # # # # #

SOLUTION!

Build two objects for tracking the highest values seen from left to right
and from right to left.
- While building these objects, we will keep track of the previous seen
  element, and use the highest number.
  - this will enable our ability to catch the various changes in tall
    and short buildings.

Using the two objects, we take the minimum of the two max directions
for each element and subtract the building height.

In the above example array, index 1: the highest number coming from the left
will be 5, while the highest number coming from the right will be 3.  If we take the
smallest of these two number, 3 and subtract the number in index 1 (2) from it
we have 1 and this is the exact number of water blocks in our visual.

*/

var waterBlocks = function (blocks) {

  const maxLeft = {};
  const maxRight = {};
  let temp = 0;
  let total = 0;
  
  for(let i = 0; i < blocks.length; i++) {
    temp = 0;
    if(i !== 0) {
      temp = maxLeft[i - 1];
    }
    maxLeft[i] = Math.max(blocks[i], temp);
  }
  for(let i = blocks.length - 1; i >= 0; i--) {
    temp = 0;
    if(i < (blocks.length - 1)) {
      temp = maxRight[i + 1];
    }
    maxRight[i] = Math.max(blocks[i], temp);
  }
  for(let i = 0; i < blocks.length; i++) {
    total += Math.min(maxLeft[i], maxRight[i]) - blocks[i];
  }
  
  return total;
};

function assert (passingTest, discriptionOf) {
  return !passingTest ? discriptionOf : 'Test Passed';
}

console.log(assert(waterBlocks([5, 2, 3, 2, 1, 3]) === 4, '[5, 2, 3, 2, 1, 3] should return 4, try again'));
console.log(assert(waterBlocks([3, 2, 1, 4]) === 3, '[3, 2, 1, 4] should return 3, try again'));
console.log(assert(waterBlocks([1, 4, 1, 3, 1, 5, 3, 1, 4, 3, 1, 2, 3, 2, 2, 3, 4]) === 23, '[1, 4, 1, 3, 1, 5, 3, 1, 4, 3, 1, 2, 3, 2, 2, 3, 4] should return 23, try again'))