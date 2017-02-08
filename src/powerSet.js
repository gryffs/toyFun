/*
Return an array that contains the power set of a given string.  The power set is a set
of all the possible subsets, including the empty set.

- All characters in a subset should be ssorted alphabetically, and the array of subsets
  should be sorted alphabetically.

- Sets of the same characters are considered duplicates regardless of order and count
  only once, e.g. ‘ab’ and ‘ba’ are the same.

- Duplicate characters in strings should be ignored.
*/
const powerSet = function powerSet (string) {
  let set = [''];
  let ltrs = [];
  // removes any duplicates
  string.split('').forEach(x => {
    if (!ltrs.includes(x)) {
      ltrs.push(x);
    }
  });
  ltrs = ltrs.sort();

  let index = 0;

  const setBuilder = function setBuilder () {
    const addSet = [];
    set.forEach(item => {
      addSet.push(item + ltrs[index]);
    });
    set = set.concat(addSet);
    index++;
  };

  while (index < ltrs.length) {
    setBuilder();
  }

  return set.sort();
};

export default powerSet;