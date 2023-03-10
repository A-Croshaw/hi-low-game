import newDeck from "./card-deck.js"

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

  const cardOne = document.querySelector('.card-1')
const cardTwo = document.querySelector('.card-2')
const cardThree = document.querySelector('.card-3')
const cardFour = document.querySelector('.card-4')
const cardFive = document.querySelector('.card-5')
document.getElementById('hi-button').addEventListener('click', higherCard);
document.getElementById('low-button').addEventListener('click', lowerCard);
document.getElementById('start-button').addEventListener('click', startGame);
document.getElementById('restart-button').addEventListener('click', restartGame);
document.getElementById('current-score').innerText ="";
document.getElementById('high-score').innerText ="";
document.getElementById('text').innerText ="Good Luck";
let cardCounter = 0;
let cardSlotOne, cardSlotTwo, cardSlotThree, cardSlotFour, cardSlotFive

  const deck = new newDeck()
  deck.shuffle()

 function restartGame(){
  cardOne.innerHTML = ""
  cardTwo.innerHTML = ""
  cardThree.innerHTML = ""
  cardFour.innerHTML = ""
  cardFive.innerHTML = ""
  document.getElementById('text').innerText ="";

  enableButtons()
  cardCounter = 0;
 }

  function startGame() {
    newGame()
    
    
    cardCounter++
    document.getElementById("start-button").disabled = true;
}

  function newGame(){
    cardOne.appendChild(cardSlotOne.cardHTML())


 }
 function enableButtons(){
  document.getElementById("hi-button").disabled = false;
  document.getElementById("low-button").disabled = false;
  document.getElementById("start-button").disabled = false;
 }
  function buttonDisable(){
  
    document.getElementById("hi-button").disabled = true;
    document.getElementById("low-button").disabled = true;

  }

function higherCard(){
    if (cardCounter === 1 ){
        if (higherCardCheck(cardSlotOne, cardSlotTwo)){
            cardTwo.appendChild(cardSlotTwo.cardHTML())
            cardCounter ++
        }else{
            text.innerText ="congrats"
            buttonDisable()
            cardCounter ++
          }
    }else if (cardCounter === 2){
        if (higherCardCheck(cardSlotTwo, cardSlotThree)){
            cardThree.appendChild(cardSlotThree.cardHTML())
            cardCounter ++
        }else{
            text.innerText="congrats"
            buttonDisable()
        }
    }else if (cardCounter === 3){
        if (higherCardCheck(cardSlotThree, cardSlotFour)){
            cardFour.appendChild(cardSlotFour.cardHTML())
            cardCounter ++
        }else{
            text.innerText="congrats"
            buttonDisable()
        }
    }else if (cardCounter === 4){
        if (higherCardCheck(cardSlotFour, cardSlotFive)){
            cardFive.appendChild(cardSlotFive.cardHTML())
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
            cardTwo.appendChild(cardSlotTwo.cardHTML())
            cardCounter ++
        }else{
            text.innerText="congrats"
            buttonDisable()
        }
    }else if (cardCounter === 2){
        if (lowerCardCheck(cardSlotTwo, cardSlotThree)){
            cardThree.appendChild(cardSlotThree.cardHTML())
            cardCounter ++
        }else{
            text.innerText="congrats"
            buttonDisable()
        }
    }else if (cardCounter === 3){
        if (lowerCardCheck(cardSlotThree, cardSlotFour)){
            cardFour.appendChild(cardSlotFour.cardHTML())
            cardCounter ++
        }else{
            text.innerText="congrats"
            buttonDisable()
        }
    }else if (cardCounter === 4){
        if (lowerCardCheck(cardSlotFour, cardSlotFive)){
            cardFive.appendChild(cardSlotFive.cardHTML())
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


  function higherCardCheck(cardOne, cardTwo) {

    return cardValue[cardOne.value] < cardValue[cardTwo.value]
}

function lowerCardCheck(cardOne, cardTwo) {

    return cardValue[cardOne.value] > cardValue[cardTwo.value]
}

CardSelector()

function CardSelector(){
    let items= [];
    for (let i = 0; i < 10; i++) { 
      items[i] = deck.cards[i] 
    console.log(items)
    }
  console.log(
  cardSlotOne = items[0],
  cardSlotTwo = items[1],
  cardSlotThree = items[2],
  cardSlotFour = items[3],
  cardSlotFive = items[4],
  items[5],items[6],items[7],items[8],items[9])
  }