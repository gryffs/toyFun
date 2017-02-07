import { shuffle, deckBuilder } from '../src/shuffle';

describe('deckBuilder', () => {
  const deck = ["CA", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10", "CJ", "CQ", "CK", "DA", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "DJ", "DQ", "DK", "HA", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "H10", "HJ", "HQ", "HK", "SA", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10", "SJ", "SQ", "SK"];
  test('will return an array with length of 52', () => {
    expect(deckBuilder().length).toEqual(52);
  });
  test('will return a deck of cards array', () => {
    expect(deckBuilder()).toEqual(deck);
  })
});

describe('shuffle', () => {
  const unShuffledDeck = deckBuilder();
  const deckForShuffle = deckBuilder();
  test('will not change the length of the deck', () => {
    shuffle(deckForShuffle);
    expect(deckForShuffle).toHaveLength(52);
  });
  test('will give a deck that is shuffled', () => {
    expect(deckForShuffle).not.toEqual(unShuffledDeck);
  });
  test('will leave all the cards in the deck', () => {
    shuffle(deckForShuffle);
    expect(deckForShuffle.sort()).toEqual(unShuffledDeck.sort());
  });
});
