// picks word from dictionary
let pickWord = () => Math.floor((Math.random()*(DICTIONARY.length-1))+0);

// replaces a character in a string at a single index
// index - index of string to replace
// c - character to sub in
String.prototype.replaceAt = function(index, c) {
	return this.substr(0, index) + c + this.substr(index + (c.length == 0 ? 1 : c.length));
}

// processes the alphabet clicked
// but - button clicked
function processPick(but) {
	var i = 0;
	var hasMatch = false;
		
	// look for alphabet occurences
	// reveal them in current answer if found
	while(i < current_word.length) {
		if(but.innerText == current_word.charAt(i)) {
			current_answer = current_answer.replaceAt(i, but.innerText);
			hasMatch = true;
		}
		i++;
	}
		
	// if the word is revealed
	if(hasMatch) {
	    but.disabled = "true";
	    callChangeBGColor(but, "green");
		// tell event handler to update answer
		callDisplayQuestion(current_answer);
		if(!current_answer.includes("_")) {
			// tell event handler to update score
			callDisplayScore(++current_score);
			// tell event handler to start next game
			nextGame(words[current_game])
		}
	} else {
	    but.disabled = "true";
		callChangeBGColor(but, "red");
		// tell event handler to decrease attempt count
		callDisplayAttempts(--current_attempt);
		// if attempt runs out before the word is revealed
		if(current_attempt == 0 && current_answer.includes("_")) {
			// tell event handler to start next game
			nextGame(words[current_game])
		}
	}
}

// pick words with no duplication
// number of words = length of game
function pickDistinctWords() {
	let picked = [];
	let words = [];
	let i = 0;
	while(i < GAME_LENGTH) {
		let num = pickWord();
		while(picked.includes(num)) {
			num = pickWord();
		}
		picked.push(num);
		words.push(DICTIONARY[num]);
		i += 1;
	}
	return words;
}

// decrease count of remaining time by one
let decrementTime = () => current_time--;