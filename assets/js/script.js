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
let cardCounter = 0;
let cardSlotOne, cardSlotTwo, cardSlotThree, cardSlotFour, cardSlotFive
let items = [];

document.getElementById('hi-button').addEventListener('click', higherCard);
document.getElementById('low-button').addEventListener('click', lowerCard);
document.getElementById('start-button').addEventListener('click', startGame);
document.getElementById('restart-button').addEventListener('click', restartGame);
document.getElementById('current-score').innerText ="";
document.getElementById('high-score').innerText ="";
document.getElementById('text').innerText ="Good Luck";




function restartGame(){
    cardOne.innerHTML = "";
    cardTwo.innerHTML = "";
    cardThree.innerHTML = "";
    cardFour.innerHTML = "";
    cardFive.innerHTML = "";
    document.getElementById('text').innerText ="";
    enableButtons();
    cardCounter = 0;  

}
   
  function startGame() {
    newGame()       
    cardCounter++
    document.getElementById("start-button").disabled = true;
    cardOne.appendChild(cardSlotOne.cardHTML())
}
newGame()

  function newGame(){
    let deck = new newDeck()
    deck.shuffle()

    items= [];
    for (let i = 0; i < 15; i++) { 
      items[i] = deck.cards[i]
    }


  console.log(
  cardSlotOne = items[0],
  cardSlotTwo = items[1],
  cardSlotThree = items[2],
  cardSlotFour = items[3],
  cardSlotFive = items[4],
  items[5],items[6],items[7],items[8],items[9], items[10],items[11],items[12],items[13],items[14])
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
        cardOneTwoCheck()
    }else if (cardCounter === 2){
        cardTwoThreeCheck()
    }else if (cardCounter === 3){
        cardThreeFourCheck()
    }else if (cardCounter === 4){
        cardFourFiveCheck()
        cardSlotOne = items[4]
        cardSlotTwo = items[5]
        cardSlotThree = items[6]
        cardSlotFour = items [7]
        cardSlotFive = items [8]
        cardOne.innerHTML = "";
        cardTwo.innerHTML = "";
        cardThree.innerHTML = "";
        cardFour.innerHTML = "";
        cardFive.innerHTML = "";
        cardOne.appendChild(cardSlotOne.cardHTML())
    }else if (cardCounter === 5){
        cardOneTwoCheck()
    }else if (cardCounter === 6){
        cardTwoThreeCheck()
    }else if (cardCounter === 7){
        cardThreeFourCheck()
    }else if (cardCounter === 8){
        cardFourFiveCheck()
        cardSlotOne = items[8]
        cardSlotTwo = items[9]
        cardSlotThree = items[10]
        cardSlotFour = items [11]
        cardSlotFive = items [12]
        cardOne.innerHTML = "";
        cardTwo.innerHTML = "";
        cardThree.innerHTML = "";
        cardFour.innerHTML = "";
        cardFive.innerHTML = "";
        cardOne.appendChild(cardSlotOne.cardHTML())
    }else if (cardCounter === 9){
        cardOneTwoCheck()
    }else if (cardCounter === 10){
        cardTwoThreeCheck()
    }else if (cardCounter === 11){
        cardThreeFourCheck()
    }else if (cardCounter === 12){
        cardFourFiveCheck()
    }else if (cardCounter === 13){
        buttonDisable()
    }else{
        text.innerText="congrats"
}
}

function lowerCard(){
    if (cardCounter === 1 ){
        cardOneTwoCheck()
    }else if (cardCounter === 2){
        cardTwoThreeCheck()
    }else if (cardCounter === 3){
        cardThreeFourCheck()
    }else if (cardCounter === 4){
        cardFourFiveCheck()
        cardSlotOne = items[4]
        cardSlotTwo = items[5]
        cardSlotThree = items[6]
        cardSlotFour = items [7]
        cardSlotFive = items [8]
        cardOne.innerHTML = "";
        cardTwo.innerHTML = "";
        cardThree.innerHTML = "";
        cardFour.innerHTML = "";
        cardFive.innerHTML = "";
        cardOne.appendChild(cardSlotOne.cardHTML())
    }else if (cardCounter === 5){
        cardOneTwoCheck()
    }else if (cardCounter === 6){
        cardTwoThreeCheck()
    }else if (cardCounter === 7){
        cardThreeFourCheck()
    }else if (cardCounter === 8){
        cardFourFiveCheck()
        cardSlotOne = items[8]
        cardSlotTwo = items[9]
        cardSlotThree = items[10]
        cardSlotFour = items [11]
        cardSlotFive = items [12]
        cardOne.innerHTML = "";
        cardTwo.innerHTML = "";
        cardThree.innerHTML = "";
        cardFour.innerHTML = "";
        cardFive.innerHTML = "";
        cardOne.appendChild(cardSlotOne.cardHTML())
    }else if (cardCounter === 9){
        cardOneTwoCheck()
    }else if (cardCounter === 10){
        cardTwoThreeCheck()
    }else if (cardCounter === 11){
        cardThreeFourCheck()   
    }else if (cardCounter === 12){
        cardFourFiveCheck()
    }else if (cardCounter === 13){
        buttonDisable()
    }else{
        text.innerText="congrats"
    }      
}

function cardFourFiveCheck(){
    if (lowerCardCheck(cardSlotFour, cardSlotFive)){
        cardFive.appendChild(cardSlotFive.cardHTML())
        cardCounter ++

    }if (higherCardCheck(cardSlotFour, cardSlotFive)){
        cardFive.appendChild(cardSlotFive.cardHTML())
        cardCounter ++
    }else{
        text.innerText="congrats"
        buttonDisable()
    }
}
function cardThreeFourCheck(){
    if (lowerCardCheck(cardSlotThree, cardSlotFour)){
        cardFour.appendChild(cardSlotFour.cardHTML())
        cardCounter ++
    }if (higherCardCheck(cardSlotThree, cardSlotFour)){
        cardFour.appendChild(cardSlotFour.cardHTML())
        cardCounter ++
    }else{
        text.innerText="congrats"
    }
}
function cardTwoThreeCheck(){
    if (lowerCardCheck(cardSlotTwo, cardSlotThree)){
        cardThree.appendChild(cardSlotThree.cardHTML())
        cardCounter ++
    }else if (higherCardCheck(cardSlotTwo, cardSlotThree)){
        cardThree.appendChild(cardSlotThree.cardHTML())
        cardCounter ++
    }else{
        text.innerText="congrats"
        buttonDisable()
    }
}
function cardOneTwoCheck(){
    if (lowerCardCheck(cardSlotOne, cardSlotTwo)){
        cardTwo.appendChild(cardSlotTwo.cardHTML())
        cardCounter ++
    }else if (higherCardCheck(cardSlotOne, cardSlotTwo)){
        cardTwo.appendChild(cardSlotTwo.cardHTML())
        cardCounter ++
    }else{
        text.innerText ="congrats"
        buttonDisable()
      }
}
function higherCardCheck(cardOne, cardTwo) {

    return cardValue[cardOne.value] < cardValue[cardTwo.value]
}

function lowerCardCheck(cardOne, cardTwo) {

    return cardValue[cardOne.value] > cardValue[cardTwo.value]
}
