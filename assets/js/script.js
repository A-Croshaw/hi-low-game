import newDeck from "./card-deck.js";

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

const cardOne = document.querySelector('.card-1');
const cardTwo = document.querySelector('.card-2');
const cardThree = document.querySelector('.card-3');
const cardFour = document.querySelector('.card-4');
const cardFive = document.querySelector('.card-5');

let cardCounter = 0;
let cardSlotOne, cardSlotTwo, cardSlotThree, cardSlotFour, cardSlotFive, ruleText;
let items = [];
let scoreCount = 0;
let highScoreCount = 0;

document.getElementById('hi-button').style.visibility = 'hidden';
document.getElementById('low-button').style.visibility = 'hidden';
document.getElementById('hi-button').addEventListener('click', higherCard);
document.getElementById('low-button').addEventListener('click', lowerCard);
document.getElementById('start-button').addEventListener('click', startGame);
document.getElementById('play-btn').addEventListener('click', hideRules);
document.getElementById('how-to-play').addEventListener('click', howToPlay);
document.getElementById('rule-btn').addEventListener('click', showRules);
document.getElementById('current-score').innerText = "0";
document.getElementById("high-score").innerText = "0";
document.getElementById('text').innerText = "Press Start To Begin";

function startGame() {
    cardOne.innerHTML = "";
    cardTwo.innerHTML = "";
    cardThree.innerHTML = "";
    cardFour.innerHTML = "";
    cardFive.innerHTML = "";
    document.getElementById('text').innerText = "Press Start To Begin";
    cardCounter = 0;
    scoreCount = 0;
    document.getElementById('current-score').innerText = "0";
    newGame();
    cardCounter++;
    cardOne.appendChild(cardSlotOne.cardHTML());
    document.getElementById('text').innerText = "Good Luck";
    ShowLowHightButtons();
}

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

function hideLowHightButtons() {
    document.getElementById('hi-button').style.visibility = 'hidden';
    document.getElementById('low-button').style.visibility = 'hidden';
}

function ShowLowHightButtons() {
    document.getElementById('hi-button').style.visibility = 'visible';
    document.getElementById('low-button').style.visibility = 'visible';
}

function showRules() {
    document.getElementById("game-rules").style.visibility = 'visible';
    document.getElementById("start-button").innerText = "START";
    cardOne.innerHTML = "";
    cardTwo.innerHTML = "";
    cardThree.innerHTML = "";
    cardFour.innerHTML = "";
    cardFive.innerHTML = "";

}

howToPlay()

function hideRules() {
    document.getElementById("game-rules").style.visibility = 'hidden';
}

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

function higherCard() {
    if (cardCounter === 1) {
        if (higherCardCheck(cardSlotOne, cardSlotTwo)) {
            cardOneTwoCheck();
        } else {
            incorrect();
            cardTwo.appendChild(cardSlotTwo.cardHTML());
        }
    } else if (cardCounter === 2) {
        if (higherCardCheck(cardSlotTwo, cardSlotThree)) {
            cardTwoThreeCheck();
        } else {
            incorrect();
            cardThree.appendChild(cardSlotThree.cardHTML());
        }
    } else if (cardCounter === 3) {
        if (higherCardCheck(cardSlotThree, cardSlotFour)) {
            cardThreeFourCheck();
        } else {
            incorrect();
            cardFour.appendChild(cardSlotFour.cardHTML());
        }
    } else if (cardCounter === 4) {
        if (higherCardCheck(cardSlotFour, cardSlotFive)) {
            cardFourFiveCheck();
            cardSetTwo();
        } else {
            incorrect();
            cardFive.appendChild(cardSlotFive.cardHTML())
        }
    } else if (cardCounter === 5) {
        if (higherCardCheck(cardSlotOne, cardSlotTwo)) {
            cardOneTwoCheck();
        } else {
            incorrect();
            cardTwo.appendChild(cardSlotTwo.cardHTML());
        }
    } else if (cardCounter === 6) {
        if (higherCardCheck(cardSlotTwo, cardSlotThree)) {
            cardTwoThreeCheck();
        } else {
            incorrect();
            cardThree.appendChild(cardSlotThree.cardHTML());
        }
    } else if (cardCounter === 7) {
        if (higherCardCheck(cardSlotThree, cardSlotFour)) {
            cardThreeFourCheck();
        } else {
            incorrect();
            cardFour.appendChild(cardSlotFour.cardHTML());
        }
    } else if (cardCounter === 8) {
        if (higherCardCheck(cardSlotFour, cardSlotFive)) {
            cardFourFiveCheck();
            cardSetThree();
        } else {
            incorrect();
            cardFive.appendChild(cardSlotFive.cardHTML())
        }
    } else if (cardCounter === 9) {
        if (higherCardCheck(cardSlotOne, cardSlotTwo)) {
            cardOneTwoCheck();
        } else {
            incorrect();
            cardTwo.appendChild(cardSlotTwo.cardHTML());
        }
    } else if (cardCounter === 10) {
        if (higherCardCheck(cardSlotTwo, cardSlotThree)) {
            cardTwoThreeCheck();
        } else {
            incorrect();
            cardThree.appendChild(cardSlotThree.cardHTML())
        }
    } else if (cardCounter === 11) {
        if (higherCardCheck(cardSlotThree, cardSlotFour)) {
            cardThreeFourCheck();
        } else {
            incorrect();
            cardFour.appendChild(cardSlotFour.cardHTML());
        }
    } else if (cardCounter === 12) {
        if (higherCardCheck(cardSlotFour, cardSlotFive)) {
            cardFourFiveCheck();
            text.innerText = "Congratulations You win";
            hideLowHightButtons();
        } else {
            incorrect();
            cardFive.appendChild(cardSlotFive.cardHTML());

        }
    } else {
        text.innerText = "Press Start to Begin";
    }
}

function lowerCard() {
    if (cardCounter === 1) {
        if (lowerCardCheck(cardSlotOne, cardSlotTwo)) {
            cardOneTwoCheck();
        } else {
            incorrect();
            cardTwo.appendChild(cardSlotTwo.cardHTML());
        }
    } else if (cardCounter === 2) {
        if (lowerCardCheck(cardSlotTwo, cardSlotThree)) {
            cardTwoThreeCheck();
        } else {
            incorrect();
            cardThree.appendChild(cardSlotThree.cardHTML())
        }
    } else if (cardCounter === 3) {
        if (lowerCardCheck(cardSlotThree, cardSlotFour)) {
            cardThreeFourCheck();
        } else {
            incorrect();
            cardFour.appendChild(cardSlotFour.cardHTML());
        }

    } else if (cardCounter === 4) {
        if (lowerCardCheck(cardSlotFour, cardSlotFive)) {
            cardFourFiveCheck();
            cardSetTwo();
        } else {
            incorrect();
            cardFive.appendChild(cardSlotFive.cardHTML());
        }
    } else if (cardCounter === 5) {
        if (lowerCardCheck(cardSlotOne, cardSlotTwo)) {
            cardOneTwoCheck();
        } else {
            incorrect();
            cardTwo.appendChild(cardSlotTwo.cardHTML());
        }
    } else if (cardCounter === 6) {
        if (lowerCardCheck(cardSlotTwo, cardSlotThree)) {
            cardTwoThreeCheck();
        } else {
            incorrect();
            cardThree.appendChild(cardSlotThree.cardHTML());
        }
    } else if (cardCounter === 7) {
        if (lowerCardCheck(cardSlotThree, cardSlotFour)) {
            cardThreeFourCheck();
        } else {
            incorrect();
            cardFour.appendChild(cardSlotFour.cardHTML());
        }
    } else if (cardCounter === 8) {
        if (lowerCardCheck(cardSlotFour, cardSlotFive)) {
            cardFourFiveCheck();
            cardSetThree();
        } else {
            incorrect();
            cardFive.appendChild(cardSlotFive.cardHTML())
        }
    } else if (cardCounter === 9) {
        if (lowerCardCheck(cardSlotOne, cardSlotTwo)) {
            cardOneTwoCheck();
        } else {
            incorrect();
            cardTwo.appendChild(cardSlotTwo.cardHTML());
        }
    } else if (cardCounter === 10) {
        if (lowerCardCheck(cardSlotTwo, cardSlotThree)) {
            cardTwoThreeCheck();
        } else {
            incorrect();
            cardThree.appendChild(cardSlotThree.cardHTML());
        }
    } else if (cardCounter === 11) {
        if (lowerCardCheck(cardSlotThree, cardSlotFour)) {
            cardThreeFourCheck();
        } else {
            incorrect();
            cardFour.appendChild(cardSlotFour.cardHTML());
        }
    } else if (cardCounter === 12) {
        if (lowerCardCheck(cardSlotFour, cardSlotFive)) {
            cardFourFiveCheck();
            text.innerText = "Congratulations You win";
            hideLowHightButtons();
        } else {
            incorrect();
            cardFive.appendChild(cardSlotFive.cardHTML());
        }
    } else {
        text.innerText = "Press Start to Begin";
    }
}

function incorrect() {
    text.innerText = "Sorry You Lost";
    hideLowHightButtons();
}

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

function cardFourFiveCheck() {
    cardFive.appendChild(cardSlotFive.cardHTML());
    cardCounter++;
    score();
}

function cardThreeFourCheck() {
    cardFour.appendChild(cardSlotFour.cardHTML());
    cardCounter++;
    score();
}

function cardTwoThreeCheck() {
    cardThree.appendChild(cardSlotThree.cardHTML());
    cardCounter++;
    score();
}

function cardOneTwoCheck() {
    cardTwo.appendChild(cardSlotTwo.cardHTML());
    cardCounter++;
    score();
}

function higherCardCheck(cardOne, cardTwo) {
    return cardValue[cardOne.value] <= cardValue[cardTwo.value];
}

function lowerCardCheck(cardOne, cardTwo) {
    return cardValue[cardOne.value] >= cardValue[cardTwo.value];
}

function score() {
    scoreCount = scoreCount + 10;
    document.getElementById("current-score").innerText = scoreCount;
    if (scoreCount > highScoreCount) {
        highScoreCount = scoreCount;
        document.getElementById("high-score").innerText = highScoreCount;
    }
}