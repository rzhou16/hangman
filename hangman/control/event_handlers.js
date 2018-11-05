// pass alphabet clicked to event processor
// element - the button element
function alphabetsOnClick(element) {
	processPick(element.innerText);
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

// pick words with no duplication
// number of words = length of game
function pickDistinctWords() {
	let picked = [];
	let words = [];
	let i = 0;
	while(i < GAME_LENGTH) {
		let num = pickWord();
		if(!picked.includes(num)) {
			picked.push(num);
			words.push(DICTIONARY[num]);
		}
		i += 1;
	}
	return words;
}

let getTime = () => decrementTime();