

var gameLost = false;
var puzzleSolved = false;
var numberOfWins = 0;
var guessesRemaining = 7;
//. O
//./|\
//. |
// / \
var answers = ['bird', 'child','down','eye','horse','mouth','silk','tooth','up','water','woman'];
var guesses = [];
// if (foundGuess = false; guesses.appendChild.key)
var pickedWord = "";
var answer = []; //list of letters forming correct answer: ['a', 'p', 'p', 'l', 'e']
var display = []; //list of stars forming the unguessed letters : ['*', '*', '*', '*', '*']



window.onload = function() {
	//when the page first loads, initialize a game & update it
	startGame(); //picks random word, fills in variables
	updateGame(); //updates the screen


	document.getElementById("current_flashcard").onclick = function() {
		if(puzzleSolved == true)
		{
			document.getElementById("play_me").play();
		}
		else
		{
			document.getElementById("play_me").play();
			alert("Solve the puzle first");
		}
	}

	//any time a key is pressed
	document.onkeyup = function(event) {
		if(puzzleSolved || gameLost)
		{
			alert("Starting a new game!");
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

		console.log("GUESSED: " + userGuess);

		if(display.indexOf(userGuess) != -1)
		{
			alert("You already guessed this!");
			return;
		}

		if(guesses.indexOf(userGuess) != -1)
		{
			alert("You already guessed this!");
			return;
		}

		//see if that letter is in answer, if it is, copy to display & replace with *
		//search through answer, find userGuess
		//when found:
		var foundMatch = false;
		for(var i=0;i<answer.length;i++)
		{
			if(answer[i] == userGuess)
			{
				foundMatch = true;
				display[i] = answer[i]; //copy the letter to display at tha tindex
				answer[i] = '*'; //replace the answer at same index with a '*'		
			}
		}

		//if I didn't match any letters, i lose 1 guess
		if(foundMatch == false)
		{
			guessesRemaining = guessesRemaining - 1;
			console.log("Penalty, 1 less move: " + guessesRemaining);
			guesses.push(userGuess);
			document.getElementById("guessesMade").innerHTML = guesses;
			//need hangman 6, 5, and 4 (but 3, 2, 1 are hint card)
			//update the hangman image to "hangman_" + guessesRemaining + ".png"
		}

		// ----- UPDATE DISPLAY -----	
		updateGame();
	}

}


//update all visual element based on current game state & trigger gameover if necessary
var updateGame = function()
{
	// ----- CHECK FOR GAME OVER -----
	// go through display and see if any *s remain.
	// if any do, we repeat, if not we exit.
	puzzleSolved = true;
	//if number of moves remaining is 0, gameOver = true;

	for(var i=0;i<display.length;i++)
	{
		if(display[i] == '*')
		{
			puzzleSolved = false;
		}
	}
	if(puzzleSolved)
	{
		console.log("YOU WIN!");
		numberOfWins = numberOfWins + 1;

		

		//display flashcard Image & load sound
		document.getElementById("current_flashcard").src = "assets/images/"+pickedWord+ ".png";
		document.getElementById("play_me").src = "assets/audio/" + pickedWord + ".mp3";

		//display "play again" button

		//display the "you win" image
		document.getElementById("win_box").innerHTML = '<img src="assets/images/you-win.png" width="100%">';
	}
	else
	{
		console.log("Game is not over yet!");
		if (guessesRemaining == 6)
		{ 
			document.getElementById("current_flashcard").src = 'assets/images/wrong-1.png';
		}

		else if (guessesRemaining == 5)
			{ 
				document.getElementById("current_flashcard").src = 'assets/images/wrong-2.png';
		}

		else if (guessesRemaining == 4){ 
			document.getElementById("current_flashcard").src = 'assets/images/wrong-3.png' ;
		}
		else if( guessesRemaining >= 4)
		{
		 	//display.guessAwayImage;    //how to display guessAway or hint??
		}
		else if(guessesRemaining > 0)
		{
			//alter the display for a hint
			console.log("Here's a hint: the answer is " + pickedWord);
			document.getElementById("current_flashcard").src = "assets/images/"+pickedWord+"-hint.png";
		}
		else  //less than or equal to zero
		{
			console.log("YOU LOSER!");
			gameLost = true;

			document.getElementById("current_flashcard").src = 'assets/images/you-lose.png' ;
			for(var i=0;i<answer.length;i++)
			{
				if(answer[i] != '*')
				{
					foundMatch = true;
					display[i] = answer[i]; //copy the letter to display at tha tindex
					answer[i] = '*'; //replace the answer at same index with a '*'		
				}

			}
		}
	}


	//updating the guess & all text
	var pretty_display = "";
	for(var i=0;i<display.length;i++)
	{
		if(display[i] == "*")
		{
			pretty_display = pretty_display + "_ ";
		}
		else
		{
			pretty_display = pretty_display + display[i] + " "
		}
	}
	document.getElementById("answer").innerHTML = answer;
	document.getElementById("display").innerHTML = pretty_display;
	console.log("Answer: " + answer);
	console.log("Display: " + pretty_display); //
	document.getElementById("guesses").innerHTML = guessesRemaining;
	document.getElementById("wins").innerHTML = numberOfWins;
}




var startGame = function() 
{
	gameLost = false;
	puzzleSolved = false;
	guesses = [];
	pickedWord = answers[Math.floor(Math.random()*answers.length)]; 
	answer = [];
	display = [];
	guessesRemaining = 7;
	document.getElementById("win_box").innerHTML = '';
	document.getElementById("current_flashcard").src = 'assets/images/guess-away.png';

	for(var i=0;i<pickedWord.length;i++)
	{
		answer[i] = pickedWord[i];
		display[i] = '*';
	}

	console.log(pickedWord);
}

