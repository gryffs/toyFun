/*
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
1p
2p
5p
10p
20p
50p
£1 (100p)
£2 (200p)
Given a given number of pence, return the possible number of ways someone could make change.

It is possible to make 5 pence in the following ways:

5 * 1p

3 * 1p + 1 * 2p

1 * 1p + 2 * 2p

1 * 5p
In other words, find all the possible combinations of coins that sum to a given pence value.
*/

function coinSums (total) {
  const pence = [1, 2, 5, 10, 20, 50, 100, 200];
  let count = 0;
  const countChange = (pencedex, val) => {
    // grab a coin, starting with the largest and working to smallest
    const coin = pence[pencedex];
    if(pencedex === 0) {
      if(val % coin === 0) count++; //start counting
      return;
    }
    while(val >= 0){
      // call the function with the new pencedex and the total value still needed
      // this goes deep (to the 1p pieces) before doing anything else
      countChange(pencedex - 1, val);
      // reduce the total value still needed by the value of the coin
      val -= coin;
    }
  };
  countChange(pence.length - 1, total);
  return count;
}
coinSums(5); // => 4
coinSums(50); // => 451
