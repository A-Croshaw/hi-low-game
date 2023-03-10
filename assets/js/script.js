import newDeck from "./card-deck.js"



document.getElementById('hi-button').addEventListener('click', higherCard);
document.getElementById('low-button').addEventListener('click', lowerCard);
document.getElementById('start-button').addEventListener('click', startGame);
document.getElementById('restart-button').addEventListener('click', restartGame);
document.getElementById('current-score').innerText ="";
document.getElementById('high-score').innerText ="";
document.getElementById('text').innerText ="Good Luck";

let cardCounter = 0;

let deck = new newDeck()
    deck.shuffle()
    console.log(deck.cards);
    let cardSlotOne = deck.cards[0];
    let cardSlotTwo = deck.cards[1];
    let cardSlotThree = deck.cards[2];
    let cardSlotFour = deck.cards[3];
    let cardSlotFive = deck.cards[4];

    document.getElementById('card-1').appendChild(cardSlotOne.cardHTML()) 
function restartGame(){

}

function startGame(){
      
}

function newGame(){
        
}

function enableButtons(){

}
 function buttonDisable(){

 }

function higherCard(){
    if (cardCounter === 1 ){
        if (higherCardCheck(cardSlotOne, cardSlotTwo)){
            document.getElementById('card-2').appendChild(cardSlotTwo.cardHTML())
            cardCounter ++
        }else{
            text.innerText ="congrats"
            buttonDisable()
            cardCounter ++
          }
    }else if (cardCounter === 2){
        if (higherCardCheck(cardSlotTwo, cardSlotThree)){
            document.getElementById('card-3').appendChild(cardSlotThree.cardHTML())
            cardCounter ++
        }else{
            text.innerText="congrats"
            buttonDisable()
        }
    }else if (cardCounter === 3){
        if (higherCardCheck(cardSlotThree, cardSlotFour)){
            document.getElementById('card-4').appendChild(cardSlotFour.cardHTML())
            cardCounter ++
        }else{
            text.innerText="congrats"
            buttonDisable()
        }
    }else if (cardCounter === 4){
        if (higherCardCheck(cardSlotFour, cardSlotFive)){
            document.getElementById('card-5').appendChild(cardSlotFive.cardHTML())
            cardCounter ++
        }else{
            text.innerText="congrats"
        }
    }else if (cardCounter === 5){
            buttonDisable()
    }else{
            text.innerText="congrats"
    } 
}

function lowerCard(){
    if (cardCounter === 1 ){
        if (lowerCardCheck(cardSlotOne, cardSlotTwo)){
            document.getElementById('card-2').appendChild(cardSlotTwo.cardHTML())
            cardCounter ++
        }else{
            text.innerText="congrats"
            buttonDisable()
        }
    }else if (cardCounter === 1){
        if (lowerCardCheck(cardSlotTwo, cardSlotThree)){
            document.getElementById('card-3').appendChild(cardSlotThree.cardHTML())
            cardCounter ++
        }else{
            text.innerText="congrats"
            buttonDisable()
        }
    }else if (cardCounter === 2){
        if (lowerCardCheck(cardSlotThree, cardSlotFour)){
            document.getElementById('card-4').appendChild(cardSlotFour.cardHTML())
            cardCounter ++
        }else{
            text.innerText="congrats"
            buttonDisable()
        }
    }else if (cardCounter === 3){
        if (lowerCardCheck(cardSlotFour, cardSlotFive)){
            document.getElementById('card-5').appendChild(cardSlotFive.cardHTML())
            cardCounter ++
        }else{
            text.innerText="congrats"
        }
    }else if (cardCounter === 5){
            buttonDisable()
    }else{
            text.innerText="congrats"
    }        
}
const cardValue = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14
  }

  function higherCardCheck(cardOne, cardTwo) {

    return cardValue[cardOne.value] < cardValue[cardTwo.value]
}

function lowerCardCheck(cardOne, cardTwo) {

    return cardValue[cardOne.value] > cardValue[cardTwo.value]
}

function randomCard(){
    
}