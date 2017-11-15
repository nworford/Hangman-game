
var puzzleSolved = false;


document.onkeyup = function(event) {
	if(puzzleSolved)
	{
		alert("Press 'new game' to start over!");
		return;
	}

	var userGuess = event.key;

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
	if(foundMatch == false)
	{
		console.log("Penalty, 1 less move");
	}


	/*
	puzzleSolved = false;
	var filledLetters = 0;
	for(var i=0;i<display.length;i++)
	{
		if(display[i] != '*')
		{
			filledLetters = filledLetters + 1;
		}
	}
	if(filledLetters == display.length)
	{
		puzzleSolved = true;
	}
	*/

	// ----- UPDATE DISPLAY -----	
	console.log(userGuess);
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
	console.log("Answer: " + answer); //this is a secret
	console.log("Display: " + pretty_display); //



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
		//display flashcard Image
		//display "play again" button
	}
	else
	{
		console.log("Game is not over yet!");}

	
}

//theme:
// each answer causes an event, what are the events?
// possible options: play a youtube video, load a webpage in a new tab, display an image, play a song
// reveal a hint/tip for something (i.e. chess could be the theme, and 'rook' revelas how a rook moves)


var answers = ['bird', 'child','down','eye','horse','mouth','silk','tooth','up','water','woman'];

var guesses = [];

// if (foundGuess = false; guesses.appendChild.key)
var answer = ['a', 'p', 'p', 'l', 'e'];
var display = ['*', '*', '*', '*', '*'];

// -----------------------------------------------------------------------

// if player solves puzzle, ad 1 to win count
var numberOfWins = 0;
	if (puzzleSolved) {

		numberOfWins = (numberOfwins + 1);

		console.log(numberOfWins);

	}
// after each time player guesses, subtract 1 from remaining guesses remaining
var guessesRemaining = 10;
	
	for (event.key) {
		guessesRemaining = guessesRemaining -1};

// after each time player guesses, record letter and add to already guessed list
var lettersAlreadyGuessed = [];
	
	for (event.key) {
		lettersAlreadyGuessed.appendChild
	};

// when only 3 guesses remaining, display hint image

function () {
	if( guessesRemaining >= 4; display.guessAwayImage);    //how to display guessAway or hint??

	else ( display.hintImage);
}

