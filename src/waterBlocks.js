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

  const maxLeft = {};  // the two tracking objects
  const maxRight = {};
  let temp = 0;
  let total = 0;
  
  for(let i = 0; i < blocks.length; i++) {
    temp = 0;  // build the largest number moving from Left to right
    if(i !== 0) {
      temp = maxLeft[i - 1];
    }  // use the largest number, either the current or the previous
    maxLeft[i] = Math.max(blocks[i], temp);
  }
  for(let i = blocks.length - 1; i >= 0; i--) {
    temp = 0;  // build the largest number moving from Right to left
    if(i < (blocks.length - 1)) {
      // checking i + 1 because we build the object from the right
      temp = maxRight[i + 1];
    }  // use the largest number, either the current or the previous
    maxRight[i] = Math.max(blocks[i], temp);
  }
  for(let i = 0; i < blocks.length; i++) {
    // take the minimum of the two max numbers and subtract the current number
    total += Math.min(maxLeft[i], maxRight[i]) - blocks[i];
  }
  
  return total;
};

export default waterBlocks;
