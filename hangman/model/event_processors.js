// picks word from dictionary
function pickWord() {
    return Math.floor((Math.random()*(DICTIONARY.length-1))+0);
}

// replaces a character in a string at a single index
// index - index of string to replace
// c - character to sub in
String.prototype.replaceAt = function(index, c) {
	return this.substr(0, index) + c + this.substr(index + (c.length == 0 ? 1 : c.length));
}

// processes the alphabet clicked
// alphabet - alphabet clicked
function processPick(alphabet) {
	var i = 0;
	var hasMatch = false;
		
	// look for alphabet occurences
	// reveal them in current answer if found
	while(i < current_word.length) {
		if(alphabet == current_word.charAt(i)) {
			current_answer = current_answer.replaceAt(i, alphabet);
			hasMatch = true;
		}
		i++;
	}
		
	// if the word is revealed
	if(hasMatch) {
		// tell event handler to update answer
		callDisplayQuestion(current_answer);
		if(!current_answer.includes("_")) {
			// tell event handler to update score
			callDisplayScore(++current_score);
			tmp = current_word;
			// tell event handler to start next game
			nextGame(DICTIONARY[pickWord()]);
			// tell event handler to display alert box
			callAlertWindow(tmp, 1);
		}
	} else {
		// tell event handler to decrease attempt count
		callDisplayAttempts(--current_attempt);
		// if attempt runs out before the word is revealed
		if(current_attempt == 0 && current_answer.includes("_")) {
			tmp = current_word;
			// tell event handler to start next game
			callNextGame(DICTIONARY[pickWord()]);
			// tell event handler to display alert box
			callAlertWindow(tmp, 0);
		}
	}
}

let decrementTime = () => current_time--;