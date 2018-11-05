init()

function init() {
	// instruction text
	let ins = document.getElementById("instruction");
	ins.className = "text-center";
	ins.innerHTML = "Instruction: Enter your name. The game consists of " + GAME_LENGTH + " questions. You have " + MAX_ATTEMPTS + " wrong attempts and " + MAX_TIME + "s for each question.";
	ins.style.fontSize = "5vw";
	
	// input for name
	let inputDiv = document.getElementById("input");
	inputDiv.className = "text-center";
	
	// submit button
	let name = document.createElement("input");
	name.type = "text";
	inputDiv.style.marginTop = "10vh";
	inputDiv.appendChild(name);
	
	let but = document.createElement("button");
	but.innerText = "LOG IN";
	but.style.marginLeft = "1vw";
	but.onclick = function() {
		if(name.value != "") {
			// save user name locally for later rank matching
			localSave(NAME, name.value); 
			window.location.href = "game.html";
		}
	}
	inputDiv.appendChild(but);
}