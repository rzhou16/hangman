// pass alphabet clicked to event processor
// element - the button element
function alphabetsOnClick(element) {
	processPick(element.innerText);
}

// tell ui controller to display alert based on win flag
// word - the answer
// win - 1 for win, 0 for loss
function callAlertWindow(word, win) {
	if(win) {
		gameWonWindow(word);
	} else {
		gameLostWindow(word);
	}
}

// tell ui controller to update question
function callDisplayQuestion(answer) {
	displayQuestion(answer);
}

// tell ui controller to update score
function callDisplayScore(score) {
	displayScore(score);
}

// tell ui controller to update attempt count
function callDisplayAttempts(attempt) {
	displayAttempts(attempt);
}

let getTime = () => decrementTime();