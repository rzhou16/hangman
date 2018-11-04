gameInit(DICTIONARY[pickWord()]);
keypadInit();

// initialise keypad buttons
function keypadInit() {
    let i = 0;
    while(i<(KEYPAD_SIZE - 1)) {
		let but = document.createElement("button");
		but.innerText = String.fromCharCode(i+97);
		but.className = "col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center";
		but.style.height = "7vh";
		but.style.fontSize = "4vh";
		but.onclick = function() {
			("click",  alphabetsOnClick(this));
		};
		keypad.appendChild(but);
        i+=1;
    }
	
	let but = document.createElement("button");
	but.innerText = "RESET";
	but.style.height = "7vh";
	but.style.fontSize = "4vh";
	but.className = "col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center";
	but.onclick = resetGame;
	keypad.appendChild(but);
}

// display score
function displayScore(current_score) {
    score.innerText = current_score;
}

// display question and incremental progress
function displayQuestion(word) {
    question.innerText = current_answer.split("").join(" ");
}

// display remaining attempts
function displayAttempts(current_attempt) {
	attempts.innerText = "Remaining Wrong Attempts: " + current_attempt;
}

// initalise ui elements
// word_picked - new word picked from dictionary
function gameInit(word_picked) {
	current_score = STARTING_SCORE;
	current_attempt = MAX_ATTEMPTS;
	current_word = word_picked;
	current_answer = current_word.replace(/[a-zA-Z]/g, "_");
	
	displayScore(current_score);
	score.style.fontSize = "6vw";
	displayQuestion(word_picked);
	displayAttempts(current_attempt);
	attempts.style.fontSize = "3vw"
}

// update ui elements for next game
// word_picked - new word picked from dictionary
function nextGame(word_picked) {
	current_attempt = MAX_ATTEMPTS;
	current_word = word_picked;
	current_answer = current_word.replace(/[a-zA-Z]/g, "_");
	
	displayQuestion(word_picked);
	displayAttempts(current_attempt);
}

// reset ui elements for new game
function resetGame() {
	gameInit(DICTIONARY[pickWord()]);
}

// message alert if won
// word - the answer
function gameWonWindow(word) {
	setTimeout(function () { alert("You got it. It's " + word + "!"); }, 10);
}

// message alert if lost
// word - the answer
function gameLostWindow(word) {
	setTimeout(function () { alert("The word is " + word + "! You suck!"); }, 10);
}