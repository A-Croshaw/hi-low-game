let cardValue = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suit = ["♠", "♣", "♥", "♦"];

export default class newDeck {
  constructor(cards = creatDeck()) {
    this.cards = cards
  }

  get deckSize() {
    return this.cards.length
  }

  shuffle(){
    for (let s = 0; s < 100; s++){
      for (let i = this.deckSize; i > 0; i--) {
        let p1 = Math.floor((Math.random() * this.cards.length));
        let p2 = Math.floor((Math.random() * this.cards.length));
        let tmp = this.cards[p1];
        this.cards[p1] = this.cards[p2];
        this.cards[p2] = tmp;
      }
    }
  }
}

function creatDeck(){
  let deck = [];
  for (let s = 0; s < suit.length; s++) {
      for (let c = 0; c < cardValue.length; c++) {
          let card = {
              value: cardValue[c],
              suit: suit[s]
          };
          deck.push(card);
      }
  }
  return deck;
}