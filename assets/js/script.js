import newDeck from "./card-deck.js"

const cardOne = document.querySelector('.card-1')
const cardTwo = document.querySelector('.card-2')
const cardThree = document.querySelector('.card-3')
const cardFour = document.querySelector('.card-4')
const cardFive = document.querySelector('.card-5')
/*
document.getElementById('hi-button').addEventListener('click', higherCard);
document.getElementById('low-button').addEventListener('click', lowerCard);
document.getElementById('start-button').addEventListener('click', startGame);
document.getElementById('restart-button').addEventListener('click', restartGame);
document.getElementById('current-score').innerText ="";
document.getElementById('high-score').innerText ="";
document.getElementById('text').innerText ="";
*/
let deck = new newDeck()

deck.shuffle()
console.log(deck.cards);

let cardSlotOne = deck.cards[0];
let cardSlotTwo = deck.cards[1];
let cardSlotThree = deck.cards[2];
let cardSlotFour = deck.cards[3];
let cardSlotFive = deck.cards[4];

document.getElementById('card-1').appendChild(cardSlotOne.cardHTML())
document.getElementById('card-2').appendChild(cardSlotTwo.cardHTML())
document.getElementById('card-3').appendChild(cardSlotThree.cardHTML())
document.getElementById('card-4').appendChild(cardSlotFour.cardHTML())
document.getElementById('card-5').appendChild(cardSlotFive.cardHTML())


function restartGame(){}
function startGame(){}
function newGame(){}
function enableButtons(){}
function buttonDisable(){}
function higherCard(){}
function lowerCard(){}
function higherCardCheck(){}
function lowerCardCheck(){}
function randomCard(){}