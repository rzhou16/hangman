// display ranking when connection is successful
function displayRank(js) {
    console.log(JSON.stringify(js));
	scores = JSON.parse(js);
	
	// retrieve name and score from local storage
	let userName = localGet(NAME);
	let userScore = localGet(SCORE);
	let userLocated = 0;
	
	// add column names - first row of table
	let display = document.getElementById("rank");
	let table = document.createElement("table");
	
	let tableBody = document.createElement("tbody");
	let heading = document.createElement("tr");
	
	let col1 = document.createElement("td");
    let col1Text = document.createTextNode("Name");
	col1.style.fontWeight = "bold";
    col1.appendChild(col1Text);
	heading.append(col1);
	
	let col2 = document.createElement("td");
    let col2Text = document.createTextNode("Score");
	col2.style.fontWeight = "bold";
    col2.appendChild(col2Text);
	heading.append(col2);
	
	let col3 = document.createElement("td");
    let col3Text = document.createTextNode("Rank");
	col3.style.fontWeight = "bold";
    col3.appendChild(col3Text);
	heading.append(col3);
	
	tableBody.appendChild(heading);
	
	
	let i = 0;
	let order = 1;
	let previous = scores[0]["score"];
	
	// add row entry
	while(i < scores.length) {
		let row = document.createElement("tr");
		let name = document.createElement("td");
		let nameText = document.createTextNode(scores[i]["name"]);
		name.appendChild(nameText);
		row.append(name);
		
		let score = document.createElement("td");
		let scoreText = document.createTextNode(scores[i]["score"]);
		score.appendChild(scoreText);
		row.append(score);
		
		let ranking = document.createElement("td");
		if(scores[i]["score"] != previous) {
			order++;
		}
		previous = scores[i]["score"];
		let rankingText = document.createTextNode(order);
		ranking.appendChild(rankingText);
		row.appendChild(ranking);
		
		tableBody.appendChild(row);
		
		// if row contains current user, make text bold and red
		if(userLocated == 0) {
			if(scores[i]["name"] == userName){
				if(scores[i]["score"] == userScore) {
					name.style.color = "red";
					name.style.fontWeight = "bold";
					score.style.color = "red";
					score.style.fontWeight = "bold";
					ranking.style.color = "red";
					ranking.style.fontWeight = "bold";
					userLocated = 1;
				}
			}	
		}
		i += 1;
	}
	
	table.appendChild(tableBody);
	display.appendChild(table);
}

// display when connection fails
function displayConnectionError() {
	let display = document.getElementById("rank");
	display.innerHTML = "Unable to establish connection.";
}

// display when connection returns empty json
function displayEmptyRankError() {
	let display = document.getElementById("rank");
	display.innerHTML = "No ranking is available.";
}

// get data from database and display page based on success or failure
getFromDatabase(displayEmptyRankError, displayRank, displayConnectionError);