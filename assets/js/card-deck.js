//The use of the [Web Dev Simplified](https://www.youtube.com/watch?v=NxRwIZWjLtE) 
//YouTube tutorials was used to help code the card deck.

//global variables to hold card suits and values
let cardValue = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suit = ["♠", "♣", "♥", "♦"];

/**
 * creats a new deck and allows it to be exported to script.js
 */
export default class newDeck {
  constructor(cards = creatDeck()) {
    this.cards = cards;
  }
  // returns deck lengh
  get deckSize() {
    return this.cards.length;
  }
  /**
   * suffles the deck using math.random moving card indexs 100 times 
   */
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

/**
 * creats a new card class
 * creats a new card 
 */
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

/**
 * creats a new deck 
 * @returns 
 */
function creatDeck() {
  return suit.flatMap(suit => {
    return cardValue.map(value => {
      return new newCard(suit, value);
    });
  });
}