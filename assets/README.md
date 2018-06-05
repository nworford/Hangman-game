

ABOUT HANGMAN GAME:

	Hangman Game, Mandarin Chinese Style is a JavaScript homework assignment. Instructions were as follows: 
- Create a hangman game with the theme of your choosing

-Use key events to listen for letters that players will type.

-Display the following on the page: “Press any key to get started!”, “Wins: (# of times user guessed the word correctly)”

-Display underscores for each letter of the word ( i.e. “horse”: _ _ _ _ _ ) 

-Display # of guesses remaining.

-Display Letters already guessed.

- After the user wins/loses, the game should automatically choose another word and make the user play it.

	In edition to the basic instructions, I chose to add “Bonuses” such as “Play a sound or song when the user guesses their word correctly”, and “Write some stylish CSS rules to make a design that fits your game's theme.”

WIREFRAME:

TECH USED: HTML, CSS, JavaScript

HIGHLIGHT CODE:
	
	This is an “onkeyup” function which signals the game to begin, or restart.  When any key is pressed, the function will first check to see if the puzzle is already solved, or if the game has already been lost. If either of those things are true, it will start a new game and update the game. 

If neither of those things are true, it will check if the key which was pressed was a letter. 

								 //any time a key is pressed

	document.onkeyup = function(event) {

		if(puzzleSolved || gameLost)

		{

			//alert("Starting a new game!");

			startGame();

			updateGame();

			return;

		}



		//otherwise the puzzle is not solved

		var userGuess = event.key;

		if(userGuess < 'a' || userGuess > 'z')

		{

			//alert("IGNORING " + userGuess);

			return;

		}


CONCLUSION: 
	This homework was really fun to create. I enjoyed working through the logic side of the game, as well as giving it the theme of Mandarin Chinese Characters. Although this assignment was only a month into the course, It is one of my favorites. 

GRADE: A+

INSTRUCTOR COMMENT:

from David Hammond 
November 29th, 6:38 pm

Nathan, really fantastic work. You really covered all the logic needed here. I especially liked that you covered key validation and let the user know if they are pressing the same key twice. Lots of extras, looking good! Keep up the great work!
