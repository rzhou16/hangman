// pass alphabet clicked to event processor
// element - the button element
function alphabetsOnClick(element) {
	processPick(element);
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

// tell ui controller to change element's background color
function callChangeBGColor(element, color) {
	changeBGColor(element, color);
}

let getTime = () => decrementTime();