
document.onkeyup = function(event) {
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



	// go through display and see if any *s remain.
	// if any do, we repeat, if not we exit.
	var gameOver = true;
	//if number of moves remaining is 0, gameOver = true;
	
	for(var i=0;i<display.length;i++)
	{
		if(display[i] == '*')
		{
			gameOver = false;
		}
	}
	if(gameOver)
	{
		alert("GAME OVER!");
	}
	else
	{
		console.log("Game is not over yet!");
	}
	console.log(userGuess);
	console.log("Answer: " + answer); //this is a secret
	console.log("Display: " + display); //
}

var guesses = [];
var answer = ['a', 'p', 'p', 'l', 'e'];
var display = ['*', '*', '*', '*', '*'];


