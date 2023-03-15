let cardValue = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suit = ["♠", "♣", "♥", "♦"];

export default class newDeck {
  constructor(cards = creatDeck()) {
    this.cards = cards;
  }

  get deckSize() {
    return this.cards.length;
  }

  shuffle() {
    for (let s = 0; s < 100; s++) {
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

class newCard {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }

  get color() {
    return this.suit === "♣" || this.suit === "♠" ? "black" : "red";
  }

  cardHTML() {
    const cardElement = document.createElement("div");
    cardElement.innerText = this.suit;
    cardElement.classList.add("card", this.color);
    cardElement.dataset.value = `${this.value} ${this.suit}`;
    return cardElement;
  }
}

function creatDeck() {
  return suit.flatMap(suit => {
    return cardValue.map(value => {
      return new newCard(suit, value);
    });
  });
}
