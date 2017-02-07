export function deckBuilder () {
  const suits = ['C', 'D', 'H', 'S'];
  const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const cardDeck = suits.reduce((accArray, curVal) => {
    values.forEach((val) => accArray.push(curVal + val));
    return accArray;
  }, []);
  return cardDeck;
}

export function shuffle (array) {
  let remainingCount = array.length;
  let temp;
  let randomIndex;

  while (remainingCount) {
    randomIndex = Math.floor(Math.random() * remainingCount--);
    temp = array[remainingCount];
    array[remainingCount] = array[randomIndex];
    array[randomIndex] = temp;
  }
}
