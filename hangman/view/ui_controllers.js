let words = pickDistinctWords();
console.log(words);
gameInit(words[0]);

// initialise keypad buttons
function keypadInit() {
	keypad.innerHTML = "";
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
		gameOverPage();
	} else {
	
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
    		
    	keypadInit();
	}
}

// clear page and show transition element to rank.html in case database is read before updated
function gameOverPage() {
    document.body.innerHTML = "";
    
    let message = document.createElement("div");
    message.className = "text-center";
    message.style.fontSize = "5vw";
    message.innerHTML = "You are done. Click the button to see your global ranking.";
    document.body.appendChild(message);
    
    let butDiv = document.createElement("div");
    butDiv.className = "text-center";
    let but = document.createElement("button");
    but.onclick = function() { window.location.href = "rank.html";};
    but.innerText = "SHOW MY RANK";
    butDiv.appendChild(but);
    document.body.appendChild(butDiv);
}

// change background color of an element
function changeBGColor(element, color) {
    element.style.background = color;
}

