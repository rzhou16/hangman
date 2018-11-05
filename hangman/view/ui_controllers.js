let words = pickDistinctWords();
gameInit(words[0]);
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
}

// display score
function displayScore(current_score) {
    score.innerHTML = current_score;
}

// display question and incremental progress
function displayQuestion(word) {
    question.innerHTML = current_answer.split("").join(" ");
}

// display remaining attempts
function displayAttempts(current_attempt) {
	attempts.innerHTML = "Remaining Wrong Attempts: " + current_attempt;
}

// display current question number
function displayNumber(current_game) {
	number.innerHTML = "Question " + current_game;
}

// display remaining time
function displayTime(current_time) {
	time.innerHTML = "Remaining Time: " + current_time + "s";
}

// initalise ui elements
// word_picked - new word picked from dictionary
function gameInit(word_picked) {
	nextGame(word_picked);
	
	current_score = STARTING_SCORE;
	displayScore(current_score);
	score.style.fontSize = "6vw";
	attempts.style.fontSize = "3vw";
	time.style.fontSize = "3vw";
	number.style.fontSize = "3vw";
}

// update ui elements for next game
// word_picked - new word picked from dictionary
function nextGame(word_picked) {
	current_game++;
	console.log(word_picked);
	displayNumber(current_game);
	
	if(current_game > GAME_LENGTH) {
		let name = localStorage.getItem(NAME);
		saveInDatabase(name, current_score);
		// save user score locally for later rank matching
		localSave(SCORE, current_score);
		window.location.href = "lab3_rank.html";
	}
	
	clearInterval(timer);
	
	current_attempt = MAX_ATTEMPTS;
	current_word = word_picked;
	current_answer = current_word.replace(/[a-zA-Z]/g, "_");
	current_time = MAX_TIME;

	displayQuestion(word_picked);
	displayAttempts(current_attempt);
	
	timer = window.setInterval(function() {
		let timeLeft = getTime();
		displayTime(timeLeft);
		if(timeLeft == 0) {
			nextGame(words[current_game]);
		}}, 1000);
}
