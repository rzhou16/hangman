function displayRank(js) {
	scores = JSON.parse(js);
	
	let display = document.getElementById("rank");
	let table = document.createElement("table");
	
	let tableBody = document.createElement("tbody");
	let heading = document.createElement("tr");
	
	let col1 = document.createElement("td");
    let col1Text = document.createTextNode("Name");
    col1.appendChild(col1Text);
	heading.append(col1);
	
	let col2 = document.createElement("td");
    let col2Text = document.createTextNode("Score");
    col2.appendChild(col2Text);
	heading.append(col2);
	
	let col3 = document.createElement("td");
    let col3Text = document.createTextNode("Rank");
    col3.appendChild(col3Text);
	heading.append(col3);
	
	tableBody.appendChild(heading);
	
	
	let i = 0;
	let order = 1;
	let previous = scores[0]["score"];
	
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
		i += 1;
	}
	
	table.appendChild(tableBody);
	display.appendChild(table);
}

function displayConnectionError() {
	let display = document.getElementById("rank");
	display.innerHTML = "Unable to establish connection.";
}

function displayEmptyRankError() {
	let display = document.getElementById("rank");
	display.innerHTML = "No ranking is available.";
}

getFromDatabase(displayEmptyRankError, displayRank, displayConnectionError);