/*

In this fake world, we only have 100, 50, or 25 dollar bills.  An item costs 25 dollars.

Take an array of transactions for this item and calculate if for each transaction, change can be given
if you start out with no change and the transactions only occur in the order they are given 
in the array.

Return YES if you can and NO if you cannot.

*/

function enoughChange(transactions){
  let change = 0;
  const bills = {'25': 0, '50': 0, '100': 0};
  let ticket = 25;
  for(let eachTransaction of transactions) {
    change = eachTransaction - ticket;
    if(!change) {
      bills['25']++;
    }
    if(change === 25) {
      if(!bills['25']) {
        return 'NO';
      }
      bills['25']--;
      bills['50']++;
    }
    if(change === 75) {
      if(bills['25'] > 0 && bills['50'] > 0) {
        bills['25']--;
        bills['50']--;
        bills['100']++;
      } else if (bills['25'] >= 3) {
        bills['25']-=3;
        bills['100']++;
      } else {
        return "NO";
      }
      
    }
    change = 0;
  }
  return "YES";
}

function assert(passingTest, discriptionOf) {
  return !passingTest ? discriptionOf : 'Test Passed';
}

console.log(assert(enoughChange([25, 25, 50, 50]) === 'YES', "Should have been YES, try again"));
console.log(assert(enoughChange([25, 100]) === 'NO', "Should have been NO, try again"))
console.log(assert(enoughChange([25,25,25,100,25,25,50,100,25,50,25,100,25,50,25,100,50,25]) === 'NO', 'Should have been NO, try again'))