function saveInDatabase(name, score) {
	let ajax = new XMLHttpRequest();
	let method = "POST";
	let url = "http://localhost/hangman/model/post.php";
	let data = "name="+name+"&score="+score;

	ajax.open(method, url, true);
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && ajax.status == 200) {
			console.log(ajax.responseText);
		}
	}
	console.log(data);
	ajax.send(data);
}