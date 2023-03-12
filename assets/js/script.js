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
    document.getElementById('text').innerText ="Good Luck";
    enableButtons();
    cardCounter = 0;  

}
   
function startGame() {
    newGame()       
    cardCounter++
    document.getElementById("start-button").disabled = true;
    cardOne.appendChild(cardSlotOne.cardHTML())
}

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
        if (higherCardCheck(cardSlotOne, cardSlotTwo)){
            cardOneTwoCheck()
        } else{
            incorrect()
            cardTwo.appendChild(cardSlotTwo.cardHTML())
        }
    }else if (cardCounter === 2){
        if (higherCardCheck(cardSlotTwo, cardSlotThree)){
            cardTwoThreeCheck()
        } else{
            incorrect()
            cardThree.appendChild(cardSlotThree.cardHTML())
        }        
    }else if (cardCounter === 3){
        if (higherCardCheck(cardSlotThree, cardSlotFour)){
            cardThreeFourCheck()
        } else{
            incorrect()
            cardFour.appendChild(cardSlotFour.cardHTML())
        }        
        
    }else if (cardCounter === 4){
        if (higherCardCheck(cardSlotFour, cardSlotFive)){
            cardFourFiveCheck();
            cardSetTwo();
        } else{
            incorrect();
            cardFive.appendChild(cardSlotFive.cardHTML())
        }
    }else if (cardCounter === 5 ){
        if (higherCardCheck(cardSlotOne, cardSlotTwo)){
            cardOneTwoCheck()
        } else{
            incorrect()
            cardTwo.appendChild(cardSlotTwo.cardHTML())
        }
    }else if (cardCounter === 6){
        if (higherCardCheck(cardSlotTwo, cardSlotThree)){
            cardTwoThreeCheck()
        } else{
            incorrect()
            cardThree.appendChild(cardSlotThree.cardHTML())
        }        
    }else if (cardCounter === 7){
        if (higherCardCheck(cardSlotThree, cardSlotFour)){
            cardThreeFourCheck()
        } else{
            incorrect()
            cardFour.appendChild(cardSlotFour.cardHTML())
        }   
    }else if (cardCounter === 8){
        if (higherCardCheck(cardSlotFour, cardSlotFive)){
            cardFourFiveCheck();
            cardSetThree();
        } else{
            incorrect();
            cardFive.appendChild(cardSlotFive.cardHTML())
        }
    }else     if (cardCounter === 9 ){
        if (higherCardCheck(cardSlotOne, cardSlotTwo)){
            cardOneTwoCheck()
        } else{
            incorrect()
            cardTwo.appendChild(cardSlotTwo.cardHTML())
        }
    }else if (cardCounter === 10){
        if (higherCardCheck(cardSlotTwo, cardSlotThree)){
            cardTwoThreeCheck()
        } else{
            incorrect()
            cardThree.appendChild(cardSlotThree.cardHTML())
        }        
    }else if (cardCounter === 11){
        if (higherCardCheck(cardSlotThree, cardSlotFour)){
            cardThreeFourCheck()
        } else{
            incorrect()
            cardFour.appendChild(cardSlotFour.cardHTML())
        }
    }else if (cardCounter === 12){
        if (higherCardCheck(cardSlotFour, cardSlotFive)){
            cardFourFiveCheck();
            text.innerText="Congratulations You win"
            buttonDisable()
        } else{
            incorrect();
            cardFive.appendChild(cardSlotFive.cardHTML())
        }
    }else{
        text.innerText="Press Start to Begin"
    }      
}

function lowerCard(){
    if (cardCounter === 1 ){
        if (lowerCardCheck(cardSlotOne, cardSlotTwo)){
            cardOneTwoCheck()
        } else{
            incorrect()
            cardTwo.appendChild(cardSlotTwo.cardHTML())
        }
    }else if (cardCounter === 2){
        if (lowerCardCheck(cardSlotTwo, cardSlotThree)){
            cardTwoThreeCheck()
        } else{
            incorrect()
            cardThree.appendChild(cardSlotThree.cardHTML())
        }        
    }else if (cardCounter === 3){
        if (lowerCardCheck(cardSlotThree, cardSlotFour)){
            cardThreeFourCheck()
        } else{
            incorrect()
            cardFour.appendChild(cardSlotFour.cardHTML())
        }        
        
    }else if (cardCounter === 4){
        if (lowerCardCheck(cardSlotFour, cardSlotFive)){
            cardFourFiveCheck();
            cardSetTwo();
        } else{
            incorrect();
            cardFive.appendChild(cardSlotFive.cardHTML())
        }
    }else if (cardCounter === 5 ){
        if (lowerCardCheck(cardSlotOne, cardSlotTwo)){
            cardOneTwoCheck()
        } else{
            incorrect()
            cardTwo.appendChild(cardSlotTwo.cardHTML())
        }
    }else if (cardCounter === 6){
        if (lowerCardCheck(cardSlotTwo, cardSlotThree)){
            cardTwoThreeCheck()
        } else{
            incorrect()
            cardThree.appendChild(cardSlotThree.cardHTML())
        }        
    }else if (cardCounter === 7){
        if (lowerCardCheck(cardSlotThree, cardSlotFour)){
            cardThreeFourCheck()
        } else{
            incorrect()
            cardFour.appendChild(cardSlotFour.cardHTML())
        }   
    }else if (cardCounter === 8){
        if (lowerCardCheck(cardSlotFour, cardSlotFive)){
            cardFourFiveCheck();
            cardSetThree();
        } else{
            incorrect();
            cardFive.appendChild(cardSlotFive.cardHTML())
        }
    }else     if (cardCounter === 9 ){
        if (lowerCardCheck(cardSlotOne, cardSlotTwo)){
            cardOneTwoCheck()
        } else{
            incorrect()
            cardTwo.appendChild(cardSlotTwo.cardHTML())
        }
    }else if (cardCounter === 10){
        if (lowerCardCheck(cardSlotTwo, cardSlotThree)){
            cardTwoThreeCheck()
        } else{
            incorrect()
            cardThree.appendChild(cardSlotThree.cardHTML())
        }        
    }else if (cardCounter === 11){
        if (lowerCardCheck(cardSlotThree, cardSlotFour)){
            cardThreeFourCheck()
        } else{
            incorrect()
            cardFour.appendChild(cardSlotFour.cardHTML())
        }
    }else if (cardCounter === 12){
        if (lowerCardCheck(cardSlotFour, cardSlotFive)){
            cardFourFiveCheck();
            text.innerText="Congratulations You win"
            buttonDisable()
        } else{
            incorrect();
            cardFive.appendChild(cardSlotFive.cardHTML())
        }
    }else{
        text.innerText="Press Start to Begin"
    }      
}

function incorrect(){
    text.innerText="Sorry Incorret guess";
    buttonDisable()
}

function cardSetTwo(){
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
}

function cardSetThree(){
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
}

function cardFourFiveCheck(){
    cardFive.appendChild(cardSlotFive.cardHTML())
    cardCounter ++
}
function cardThreeFourCheck(){
    cardFour.appendChild(cardSlotFour.cardHTML())
    cardCounter ++
}
function cardTwoThreeCheck(){
    cardThree.appendChild(cardSlotThree.cardHTML())
    cardCounter ++
}

function cardOneTwoCheck(){   
    cardTwo.appendChild(cardSlotTwo.cardHTML())
    cardCounter ++
}

function higherCardCheck(cardOne, cardTwo) {
    return cardValue[cardOne.value] <= cardValue[cardTwo.value]
}

function lowerCardCheck(cardOne, cardTwo) {
    return cardValue[cardOne.value] >= cardValue[cardTwo.value]
}
