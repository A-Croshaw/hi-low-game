# _HI LOW GAME _

![Mock-up-Image](documents/readme-images/Mock-Up.png)

[__Click here to view published site__](https://a-croshaw.github.io/hi-low-game/)


# _Content Menu_

1. [Features](#features)
    1. [Elements](#elements)
        1. [The Background](#1---the-background)
        2. [Main Header](#2---main-header)
        3. [The Headers](#3---the-headers)
        4. [The Footer](#4---the-footer)
        5. [The Buttons](#5---the-buttons)
            1. [Game Information Buttons](#1---game-information-buttons)
            2. [Start and Restart Buttons](#2---start-and-restart-buttons)
            3. [Hi and low Buttons](#3---hi-and-low-buttons)
        6. [Scores](#6---scores)
        7. [Game Text](#7---game-text)
        8. [Cards](#8---cards)
        9. [Complete-game](#9---complete-game)
        10. [Information Window](#10---information-window)
        11. [Favicon](#11---favicon)
    7. [404 Page](#404-page)
    8. [Implemented Features](#implemented-features)
    9. [Features to be Implemented](#features-to-be-implemented)
2. [Design](#design)
3. [Bugs](#bugs)
4. [Testing](#testing)
    1. [Responsiveness](#1---responsiveness)
    2. [Navigation, External Links, and User Input Testing](#2---navigation-external-links-and-user-input-testing)
5. [Accessibility](#accessibility)
6. [Validation](#validation)
    1. [HTML Validation](#1---html-validation)
    2. [CSS Validation](#2---css-validation)
    3. [JavaScript Validation](#3---javascript-validation)
        1. [script](#1---script)
        2. [card-deck](#2---card-deck)
    4. [Lighthouse Reports](#4---lighthouse-reports)
        1. [Desktop](#1---desktop)
        2. [Mobile](#2---mobile)
7. [Depolyment](#deployment)
    1. [Version Control](#1---page-deployment)
    2. [Page Deployment](#2---page-deployment)
    3. [Cloning Repository](#3---cloning-repository)
8. [Credits](#credits)
    1. [Content and Media](#1---content-and-media)
    2. [Code](#2---code)

# _Features_

## _Elements_

The elements to this feature game are as followed:

### _1 - The Background_

 * The main background is a soft light blue #38d9f538 to make the main game area stand out 
 * whilst the background image to the game area is not visualy over powering to the rest of the elements within the game area.

![Game-Area-Image](documents/readme-images/Game-Area-Image.webp)

### _2 - Main Header_

 * The main header is a simple black h2 element with the font of  "Bad Script" that is imported from Google fonts.

![Header](documents/readme-images/Header.png)

### _3 - The header_

 * The headers that are within the infomation window are yellow #f8df00. With the font of  "Bad Script" that is imported from Google fonts.

![Game Information Headers](documents/readme-images/Info-Header.png)

### _4 - The Footer_

 * The footer reads "Hi Low Game Github Repository" which link to the github repository for this game.
 * It is just a simple text format using the font "Bad Script" that is imported from Google fonts.

![Footer](documents/readme-images/Footer.png)

### _5 - The Buttons_

 * All the buttons through the game have the same style.
 * They are a beep blue color #04033b and when hovered over change to a lighter blue #06056d.
 * They all consist of yellow text #ffe600.
 * They all have the font "Bad Script" that is imported from Google fonts.
 * They all consist of a sold yellow border #faf761.
 * They all have all have two coners rounded.

#### _1 - Game Information Buttons_

 * Within the game information section shows two buttons a "play" and "how to play".
 * When the "how to play" button is pressed it changes to the "game rules" button.
 * When the "play" button is press it hides the information window to allow you to play the game.

![Game Information Buttons](documents/readme-images/Buttons-1.png)
![Game Information Buttons](documents/readme-images/Buttons-6.png)

 * Within the main game area the "i" button opens up the information window.

![Game Information Buttons](documents/readme-images/Buttons-5.png)

#### _2 - Start and Restart Buttons_

 * Within the main game area the "start" button will show soon as the information window is closed.
 * When the start button is pressed the "restart" button will show which will remain untill the game is fully restarted.

![Start button](documents/readme-images/Buttons-2.png)
![Restart button](documents/readme-images/Buttons-3.png)

#### _3 - Hi and Low Buttons_

 * The "hi" and "low buttons only appear once the start button is pressed.
 * The "hi" and "low" buttons are allow yopu to select hi or low options when the game is started. 

![Hi and Low Buttons](documents/readme-images/Buttons-4.png)

### _6 - Scores_

 * The scores are to the right top side of the game area.
 * With the background as a lightly transparent yellow #ffee00b2.
 * The text has a font of 'Rampart One' which is imported from google fonts.

![Scores](documents/readme-images/Scores.png)

### _7 - Game Text_
* The Game test area is placed above the card in the middle of the game area.
* The Text has the font "Bad Script" that is imported from Google fonts.
* With the background as a lightly transparent yellow #ffee00b2.

![Game Text](documents/readme-images/Game-Text.png)

### _8 - Cards_

 * The cards are static with the back displaying a little dragon.
 * Once the cards Turn they will minic the design of a normal deck of cards with the exception of the 
king, queen and jack which dont show the pictures just the letters.

![Cards](documents/readme-images/Cards.png)

### _9 - Complete Game_

* A complete view of the game area with all the elements.

![Game Area](documents/readme-images/Game.png)

### _10 - Information Window_

* The information window is displayed as soon as the game is loaded.
* The Text has the font "Bad Script" that is imported from Google fonts.
* The text color is yellow #f8df00.
* With the background as a lightly transparent black #000000c4.
* The "how to play" and "game rules" buttons toggle between to sets of information within the same window.

![Information Window](documents/readme-images/Information-Window.png)
![Information Window](documents/readme-images/Information-Window-2.png)

### _11 - Favicon_

 * 

![Favicon](documents/readme-images/favicon.ico)


## _404 Page_

![404 Image](documents/readme-images/)

## _Implemented Features_
 
 * The responsiveness of the site is 280px and up.
 * All external links open up as they should on all devices.
 * Buttons that call different functions to operate the game.
 * Element to track a users higest score within that game session.
 (not linked to external storage to keep highest score from refreshing when page reloads).
 * 404 page to let the user know there is a broken link or a mistype in the URL.
 * 404 page has a navigation bar and also a link in content to return to the main content of the site. 
 
## _Features to be Implemented_

 * A second card game to give the user a choice of game eg 21. 
 * An extreme 52 card hi and low game that runs through the complete card deck.

# _Design_
 
 * The Header will be above the game area.
 * The footer will be below the game area.
 * The game will be only on one page with all elements reaction with in a set area.
 * There will be an information window that will describe the rules and how to play the game when loaded.
 * The information window will be accessible via a button on the main game area.
 * The information button will be placed in the top right hand corner of the game area.

 ![Wire Frame](documents/readme-images/Game-Design1.png)

 * With in the main game area there will be a high score and a current score to the left top coner.
 * The start/restart button will be to the top center.
 * A text area to display the text in game text during the game.
 * There will be five cards shown with the backs shown which will reveal the cards are progress through.
 * each card back will display an image.
 * All cards displayed when revealed will represent a card from a normal deck of cards.
 * Below the cards there will be a hi and low button for user to select to play the game.

 ![Wire Frame](documents/readme-images/Game-Design.png)

# _Bugs_

 * There are no known bugs within the site after testing on multiple devices.
 * An exterme hi and low section that goes through a full 52 cards. 

# _Testing_

## _1 - Responsiveness_

 * This online game has been tested on Edge, Safari, Chrome, Firefox, and Opera.
 * Devices the site has been tested on are Samsung 22 + 10 lite, Iphone 11 + 13, PC, and Lenovo tablet.
 * The site has been fully tested using google developer on all screen sizes from 280px and up.
 * The site is fully responsive across all the devices with the screens vertically and horizontally.
 * There are no horizontal scrolls when tested across these devices.
 * The images do not become pixelated.
 * None of the content overlaps when screen size reduces.
 * All relevent content for the game stays withing the game area when tested on the verious screen sizes.

## _2 - Game Testing_

* This online game have been tested on Edge, Safari, Chrome, Firefox, and Opera.
* This online game has been tested on mutiple devices Samsung 22 + 10 lite, Iphone 11 + 13, PC, and Lenovo tablet.
* With all the fuctonality seem to be working corretly. [Test Document](documents/testing-document/testing.docx)
* Due to the randomness of the card selection with google developer and using a console.log to see the card values to manipulate hi and low card correct or incorrect guesses. This allowed to check if the fuctonality worked correct on all 13 cards and the right game text was correctly shown for given outcome for incorret guesses, corret guesses and game win.

## _3 - Footer Link Test_

 * The footer link correctly opened up the github repository in a new tab across all device used in testing.

# _Accessibility_

 * The page accessibility was checked using [Wave](https://wave.webaim.org/).
 * Index.html has one alert for saying text maybe a heading when it was not.
 * All links have proper aria labels.
 * There is no conflicts with the contrast of colours.

![index-wave](documents/readme-images/Wave-Check.png)

# _Validation_

## _1 - HTML Validation_

* The HTML on all pages passed through the [W3C validator](https://validator.w3.org/) without any errors.

![HTML validation](documents/readme-images/HTML-Validation.png)

## _2 - CSS Validation_

* The CSS code passed through the [Jigsaw validator](https://jigsaw.w3.org/css-validator/) without any errors.

![CSS validation](documents/readme-images/CSS-Validation.png)

## _3 - JavaScript Validation_

* The JavaScript code passed through the [JSHint](https://https://jshint.com/) without any errors.

###  _1 - script_

![JavaScript validation](documents/readme-images/JavaScript-Validation.png)

###  _2 - card-deck_

![JavaScript validation](documents/readme-images/JavaScript-Cards-Validation.png)

## _4 - Lighthouse Reports_

### _1 - Desktop_

 * index.html

![Lighthouse Desktop](documents/readme-images/Lighthouse-Desktop.png)

### _2 - Mobile_

 * index.html

![Lighthouse Mobile](documents/readme-images/Lighthouse-Mobile.png)

# _Deployment_

## _1 - Version Control_

 * From the Gitpod terminal use "git add ." which tells git you would like to make changes/updates to the files.
 * Then use "git commit -m " with a comment, this will commit the changes and update the files.
 * Then using the "git push" command this will push the committed changes to your GitHub repository.

## _2 - Page Deployment_

 * Load up the GitHub website and log in to your account.
 * Select and open the repository to be published.
 * Click on the settings within this repository and scroll down and open the pages section.
 * Under the build and deployment section within pages put the source to display a branch, select the branch to main and the folder to root, and hit the save button.
 * Then select the visit site button at the top to view the live deployment of the site.
 Visit the live deployment of the site [HERE](https://a-croshaw.github.io/hi-low-game/).

## _3 - Cloning Repository_

 * To clone the repository for download or use within your GitHub head-over to this link https://github.com/git-guides/git-clone

# _Credits_

## _ 1 - Content and Media_

 *  The image used for the back of the card was taken from [Pixabay](https://pixabay.com/illustrations/ai-generated-baby-dragon-cute-7705365/) and is free licensed under the Pixabay licensing condtions.

 * The image used fro the background of the game are is from [Wallpapers.com](https://wallpapers.com/wallpapers/blue-and-red-fire-j9nfqyrlnhxznmh5.html) with under there licensing the image is only for personal use. As this is a personal and project for education perpose this image can not be published out side of this scope.

## _2 - Code_

 * For the font style's Prata and Slabo, These are from [Google-Fonts](https://fonts.google.com/).
 * The Favicon code and image icon rendering was produced using [favicon.io](https://favicon.io/).
 * The social media icons used, are provided by [Font Awesome](https://fontawesome.com/).
 * The use of the [Web Dev Simplified](https://www.youtube.com/watch?v=NxRwIZWjLtE) YouTube tutorials was used to help code the card deck. 
 * For the understanding and coding HTML, CSS and Javascript [W3Schools](https://www.w3schools.com/js/default.asp) also [Stack Overflow](https://stackoverflow.com/tags)and was used.
 * The 
 * For the understanding and css code for aligning flexbox [flexboxfroggy](https://flexboxfroggy.com/) was used.
 * To create the screen mockup i used [techsini.com](https://techsini.com/multi-mockup/index.php).
