import newDeck from "./card-deck.js";

//global variable array to map the card values
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
};

//global variables to hold card div elements to allow for showing of the cards
const cardOne = document.querySelector('.card-1');
const cardTwo = document.querySelector('.card-2');
const cardThree = document.querySelector('.card-3');
const cardFour = document.querySelector('.card-4');
const cardFive = document.querySelector('.card-5');

//global variable to hold game text 
const text = document.getElementById('text');

//global variable to count cards
let cardCounter = 0;

// global variables to hold items entries for the card entries and rule text
let cardSlotOne, cardSlotTwo, cardSlotThree, cardSlotFour, cardSlotFive, ruleText;

//global array to hold random selected cards 
let items = [];

// global variables to hold scores
let scoreCount = 0;
let highScoreCount = 0;

//button event listeners 
document.getElementById('hi-button').addEventListener('click', higherCard);
document.getElementById('low-button').addEventListener('click', lowerCard);
document.getElementById('start-button').addEventListener('click', startGame);
document.getElementById('play-btn').addEventListener('click', hideRules);
document.getElementById('how-to-play').addEventListener('click', howToPlay);
document.getElementById('rule-btn').addEventListener('click', showRules);

/**
 * resets game elements for a new game
 */
function startGame() {
    cardOne.innerHTML = "";
    cardTwo.innerHTML = "";
    cardThree.innerHTML = "";
    cardFour.innerHTML = "";
    cardFive.innerHTML = "";
    cardCounter = 0;
    scoreCount = 0;
    document.getElementById('current-score').innerText = "0";
    newGame();
    cardCounter++;
    cardOne.appendChild(cardSlotOne.cardHTML());
    document.getElementById('text').innerText = "Good Luck";
    ShowLowHightButtons();
}

/**
 * creats a new deck of cards
 * suffles the new deck
 * randomly selects 15 cards and places them in to items array
 * replaces innerText on start button to restart
 */
function newGame() {
    document.getElementById("start-button").innerText = "RESTART";
    let deck = new newDeck();
    deck.shuffle();
    items = [];
    for (let i = 0; i < 15; i++) {
        items[i] = deck.cards[i];
    }
    cardSlotOne = items[0];
    cardSlotTwo = items[1];
    cardSlotThree = items[2];
    cardSlotFour = items[3];
    cardSlotFive = items[4];
}

/**
 * Shows game the game rules element
 * resets the restart button text to start
 * resets the card elements
 */
function showRules() {
    document.getElementById("game-rules").style.visibility = 'visible';
    document.getElementById("start-button").innerText = "START";
    cardOne.innerHTML = "";
    cardTwo.innerHTML = "";
    cardThree.innerHTML = "";
    cardFour.innerHTML = "";
    cardFive.innerHTML = "";
}

// hide the game rules element
function hideRules() {
    document.getElementById("game-rules").style.visibility = 'hidden';
}

/**
 * renders innertext to the game rules element depending on which button is pressed
 * this uses the ruleText variable to determin which set to display
 * @param{let} ruleText
 */

howToPlay();

function howToPlay() {
    if (ruleText === 0) {
        document.getElementById('rule-header').innerText = "How To Play";
        document.getElementById('rule-text-1').innerText = "Press the Start button to begin a game";
        document.getElementById('rule-text-2').innerText = "Pressing the Restart button will restart the game after winning or losing";
        document.getElementById('rule-text-3').innerText = "Press the Hi button to guess high";
        document.getElementById('rule-text-4').innerText = "Press the Low button to guess low";
        document.getElementById('rule-text-5').innerText = "Cards of the same value are treated as hi or low values";
        document.getElementById("how-to-play").innerText = "Game Rules";
        ruleText++;
    } else {
        document.getElementById('rule-header').innerText = "Game Rules";
        document.getElementById('rule-text-1').innerText = "To win, Reach the final card by guessing higer or lower for the next card";
        document.getElementById('rule-text-2').innerText = "There are 13 cards dealt that will be shown from left to right over the 5 card display";
        document.getElementById('rule-text-3').innerText = "When you are on the 4th and 8th card and guess corret the 5th and 9th cards will show in the 1st card position";
        document.getElementById('rule-text-4').innerText = "When you are on the 4th and 8th card and guess incorret the 5th and 9th cards will show in the 5th card position";
        document.getElementById("how-to-play").innerText = "How to Play";
        ruleText = 0;
    }
}

/**
 * for high card checks
 * @var{let} cardCount Check to run which checks needs to be made
 * @var{let} cardSlotOne
 * @var{let} cardSlotTwo
 * @var{let} cardSlotThree
 * @var{let} cardSlotFour
 * @var{let} cardSlotFive
 * @function cardOneTwoCheck checks answer on first and second cards
 * @function cardTwoThreeCheck checks answer on second and third cards
 * @function cardThreeFourCheck checks answer on third and fourth cards
 * @function cardFourFiveCheck checks answer on fourth and fifth cards
 * @function incorrect to display incorrect items to page
 * @function cardSetTwo to collect next cards to be shown
 * @function cardSetThree to collect next cards to be shown
 * @function higherCardCheck checks the two card values
 */
function higherCard() {
    if (cardCounter === 1) {
        if (higherCardCheck(cardSlotOne, cardSlotTwo)) {
            cardOneTwoCheck();
        } else {
            incorrect();
            //shows card after wrong answer
            cardTwo.appendChild(cardSlotTwo.cardHTML());
        }
    } else if (cardCounter === 2) {
        if (higherCardCheck(cardSlotTwo, cardSlotThree)) {
            cardTwoThreeCheck();
        } else {
            incorrect();
            //shows card after wrong answer
            cardThree.appendChild(cardSlotThree.cardHTML());
        }
    } else if (cardCounter === 3) {
        if (higherCardCheck(cardSlotThree, cardSlotFour)) {
            cardThreeFourCheck();
        } else {
            incorrect();
            //shows card after wrong answer
            cardFour.appendChild(cardSlotFour.cardHTML());
        }
    } else if (cardCounter === 4) {
        if (higherCardCheck(cardSlotFour, cardSlotFive)) {
            cardFourFiveCheck();
            cardSetTwo();
        } else {
            incorrect();
            //shows card after wrong answer
            cardFive.appendChild(cardSlotFive.cardHTML());
        }
    } else if (cardCounter === 5) {
        if (higherCardCheck(cardSlotOne, cardSlotTwo)) {
            cardOneTwoCheck();
        } else {
            incorrect();
            //shows card after wrong answer
            cardTwo.appendChild(cardSlotTwo.cardHTML());
        }
    } else if (cardCounter === 6) {
        if (higherCardCheck(cardSlotTwo, cardSlotThree)) {
            cardTwoThreeCheck();
        } else {
            incorrect();
            //shows card after wrong answer
            cardThree.appendChild(cardSlotThree.cardHTML());
        }
    } else if (cardCounter === 7) {
        if (higherCardCheck(cardSlotThree, cardSlotFour)) {
            cardThreeFourCheck();
        } else {
            incorrect();
            //shows card after wrong answer
            cardFour.appendChild(cardSlotFour.cardHTML());
        }
    } else if (cardCounter === 8) {
        if (higherCardCheck(cardSlotFour, cardSlotFive)) {
            cardFourFiveCheck();
            cardSetThree();
        } else {
            incorrect();
            //shows card after wrong answer
            cardFive.appendChild(cardSlotFive.cardHTML());
        }
    } else if (cardCounter === 9) {
        if (higherCardCheck(cardSlotOne, cardSlotTwo)) {
            cardOneTwoCheck();
        } else {
            incorrect();
            //shows card after wrong answer
            cardTwo.appendChild(cardSlotTwo.cardHTML());
        }
    } else if (cardCounter === 10) {
        if (higherCardCheck(cardSlotTwo, cardSlotThree)) {
            cardTwoThreeCheck();
        } else {
            incorrect();
            cardThree.appendChild(cardSlotThree.cardHTML());
        }
    } else if (cardCounter === 11) {
        if (higherCardCheck(cardSlotThree, cardSlotFour)) {
            cardThreeFourCheck();
        } else {
            incorrect();
            //shows card after wrong answer
            cardFour.appendChild(cardSlotFour.cardHTML());
        }
    } else if (cardCounter === 12) {
        if (higherCardCheck(cardSlotFour, cardSlotFive)) {
            cardFourFiveCheck();
            //shows winning text to game text area
            text.innerText = "Congratulations You Win 🏆";
            hideLowHightButtons();
        } else {
            incorrect();
            //shows card after wrong answer
            cardFive.appendChild(cardSlotFive.cardHTML());

        }
    } else {
        text.innerText = "Press Start to Begin";
    }
}

/**
 * for low card checks
 * @var{let} cardCount Check to run which checks needs to be made
 * @var{let} cardSlotOne stores items index 0
 * @var{let} cardSlotTwo stores items index 2
 * @var{let} cardSlotThree stores items index 3
 * @var{let} cardSlotFour stores items index 4
 * @var{let} cardSlotFive stores items index 5
 * @function cardOneTwoCheck checks answer on first and second cards
 * @function cardTwoThreeCheck checks answer on second and third cards
 * @function cardThreeFourCheck checks answer on third and fourth cards
 * @function cardFourFiveCheck checks answer on fourth and fifth cards
 * @function incorrect to display incorrect items to page
 * @function cardSetTwo to collect next cards to be shown
 * @function cardSetThree to collect next cards to be shown
 * @function LowerCardCheck checks the two card values
 */
function lowerCard() {
    if (cardCounter === 1) {
        if (lowerCardCheck(cardSlotOne, cardSlotTwo)) {
            cardOneTwoCheck();
        } else {
            incorrect();
            //shows card after wrong answer
            cardTwo.appendChild(cardSlotTwo.cardHTML());
        }
    } else if (cardCounter === 2) {
        if (lowerCardCheck(cardSlotTwo, cardSlotThree)) {
            cardTwoThreeCheck();
        } else {
            incorrect();
            //shows card after wrong answer
            cardThree.appendChild(cardSlotThree.cardHTML());
        }
    } else if (cardCounter === 3) {
        if (lowerCardCheck(cardSlotThree, cardSlotFour)) {
            cardThreeFourCheck();
        } else {
            incorrect();
            //shows card after wrong answer
            cardFour.appendChild(cardSlotFour.cardHTML());
        }
    } else if (cardCounter === 4) {
        if (lowerCardCheck(cardSlotFour, cardSlotFive)) {
            cardFourFiveCheck();
            cardSetTwo();
        } else {
            incorrect();
            //shows card after wrong answer
            cardFive.appendChild(cardSlotFive.cardHTML());
        }
    } else if (cardCounter === 5) {
        if (lowerCardCheck(cardSlotOne, cardSlotTwo)) {
            cardOneTwoCheck();
        } else {
            incorrect();
            //shows card after wrong answer
            cardTwo.appendChild(cardSlotTwo.cardHTML());
        }
    } else if (cardCounter === 6) {
        if (lowerCardCheck(cardSlotTwo, cardSlotThree)) {
            cardTwoThreeCheck();
        } else {
            incorrect();
            //shows card after wrong answer
            cardThree.appendChild(cardSlotThree.cardHTML());
        }
    } else if (cardCounter === 7) {
        if (lowerCardCheck(cardSlotThree, cardSlotFour)) {
            cardThreeFourCheck();
        } else {
            incorrect();
            //shows card after wrong answer
            cardFour.appendChild(cardSlotFour.cardHTML());
        }
    } else if (cardCounter === 8) {
        if (lowerCardCheck(cardSlotFour, cardSlotFive)) {
            cardFourFiveCheck();
            cardSetThree();
        } else {
            incorrect();
            //shows card after wrong answer
            cardFive.appendChild(cardSlotFive.cardHTML());
        }
    } else if (cardCounter === 9) {
        if (lowerCardCheck(cardSlotOne, cardSlotTwo)) {
            cardOneTwoCheck();
        } else {
            incorrect();
            //shows card after wrong answer
            cardTwo.appendChild(cardSlotTwo.cardHTML());
        }
    } else if (cardCounter === 10) {
        if (lowerCardCheck(cardSlotTwo, cardSlotThree)) {
            cardTwoThreeCheck();
        } else {
            incorrect();
            //shows card after wrong answer
            cardThree.appendChild(cardSlotThree.cardHTML());
        }
    } else if (cardCounter === 11) {
        if (lowerCardCheck(cardSlotThree, cardSlotFour)) {
            cardThreeFourCheck();
        } else {
            incorrect();
            //shows card after wrong answer
            cardFour.appendChild(cardSlotFour.cardHTML());
        }
    } else if (cardCounter === 12) {
        if (lowerCardCheck(cardSlotFour, cardSlotFive)) {
            cardFourFiveCheck();
            //shows winning text to game text area
            text.innerText = "Congratulations You Win 🏆";
            hideLowHightButtons();
        } else {
            incorrect();
            //shows card after wrong answer
            cardFive.appendChild(cardSlotFive.cardHTML());
        }
    } else {
        text.innerText = "Press Start to Begin";
    }
}

// hides hi and low buttons
function hideLowHightButtons() {
    document.getElementById('hi-button').style.visibility = 'hidden';
    document.getElementById('low-button').style.visibility = 'hidden';
}

//shows the high and low buttons
function ShowLowHightButtons() {
    document.getElementById('hi-button').style.visibility = 'visible';
    document.getElementById('low-button').style.visibility = 'visible';
}

//changes game text area and hides hi and low buttons on incorrect guess
function incorrect() {
    text.innerText = "Sorry You Lost";
    hideLowHightButtons();
}

/**
 * replace cardSlot variables with a new index for next set of cards 
 * @var{let} cardSlotOne stores items index 4
 * @var{let} cardSlotTwo stores items index 5
 * @var{let} cardSlotThree stores items index 6
 * @var{let} cardSlotFour stores items index 7
 * @var{let} cardSlotFive stores items index 8
 * clears cardOne - cardFive variables in html to start the next cards in the game
 * then shows new cardOne item using innetHTML
 * @var{let} cardOne 
 * @var{let} cardTwo 
 * @var{let} cardThree 
 * @var{let} cardFour 
 * @var{let} cardFive 
 */
function cardSetTwo() {
    cardSlotOne = items[4];
    cardSlotTwo = items[5];
    cardSlotThree = items[6];
    cardSlotFour = items[7];
    cardSlotFive = items[8];
    cardOne.innerHTML = "";
    cardTwo.innerHTML = "";
    cardThree.innerHTML = "";
    cardFour.innerHTML = "";
    cardFive.innerHTML = "";
    cardOne.appendChild(cardSlotOne.cardHTML());
}

/**
 * replace cardSlot variables with a new index for next set of cards 
 * @var{let} cardSlotOne stores items index 4
 * @var{let} cardSlotTwo stores items index 5
 * @var{let} cardSlotThree stores items index 6
 * @var{let} cardSlotFour stores items index 7
 * @var{let} cardSlotFive stores items index 8
 * clears cardOne - cardFive variables in html to start the next cards in the game
 * then shows new cardOne item using innetHTML
 * @var{let} cardOne 
 * @var{let} cardTwo 
 * @var{let} cardThree 
 * @var{let} cardFour 
 * @var{let} cardFive 
 */
function cardSetThree() {
    cardSlotOne = items[8];
    cardSlotTwo = items[9];
    cardSlotThree = items[10];
    cardSlotFour = items[11];
    cardSlotFive = items[12];
    cardOne.innerHTML = "";
    cardTwo.innerHTML = "";
    cardThree.innerHTML = "";
    cardFour.innerHTML = "";
    cardFive.innerHTML = "";
    cardOne.appendChild(cardSlotOne.cardHTML());
}

/**
 * function to run if card guess four five is correct
 * @var{let} cardSlotFive stores items index 8
 * @var{let} cardFive 
 * @function score
 **/
function cardFourFiveCheck() {
    // shows card five place ment
    cardFive.appendChild(cardSlotFive.cardHTML());
    //adds one to the card counter
    cardCounter++;
    //runs score function
    score();
}

/**
 * function to run if card guess Three four is correct
 * @var{let} cardSlotFour
 * @var{let} cardFour 
 * @function score
 **/
function cardThreeFourCheck() {
    cardFour.appendChild(cardSlotFour.cardHTML());
    //adds one to the card counter
    cardCounter++;
    //runs score function
    score();
}

/**
 * function to run if card guess Two Three is correct
 * @var{let} cardSlotThree
 * @var{let} cardThree
 * @function score
 **/
function cardTwoThreeCheck() {
    cardThree.appendChild(cardSlotThree.cardHTML());
    //adds one to the card counter
    cardCounter++;
    //runs score function
    score();
}

/**
 * function to run if card guess One Two is correct
 * @var{let} cardSlotTwo
 * @var{let} cardTwo
 * @function score
 **/
function cardOneTwoCheck() {
    cardTwo.appendChild(cardSlotTwo.cardHTML());
    //adds one to the card counter
    cardCounter++;
    //runs score function
    score();
}

/**
 * takes the value of the cardSlot variables and compares it with the map values and returns which card is higher
 * @param {*} cardOne 
 * @param {*} cardTwo 
 * @returns 
 */
function higherCardCheck(cardOne, cardTwo) {
    return cardValue[cardOne.value] <= cardValue[cardTwo.value];
}

/**
 * takes the value of the cardSlot variables and compares it with the map values and returns which card is lower
 * @param {*} cardOne 
 * @param {*} cardTwo 
 * @returns 
 */
function lowerCardCheck(cardOne, cardTwo) {
    return cardValue[cardOne.value] >= cardValue[cardTwo.value];
}

/**
 * adds then to score count on a correct guess
 * checks highScoreCount against scoreCount and if scoreCount is greater implements new high score
 */
function score() {
    scoreCount = scoreCount + 10;
    document.getElementById("current-score").innerText = scoreCount;
    if (scoreCount > highScoreCount) {
        highScoreCount = scoreCount;
        document.getElementById("high-score").innerText = highScoreCount;
    }
}