function saveInDatabase(name, score) {
	let ajax = new XMLHttpRequest();
	let method = "POST";
	let url = "model/post.php";
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

function getFromDatabase(callback1, callback2, callback3) {
	let ajax = new XMLHttpRequest();
	let method = "GET";
	let url = "model/get.php";
	ajax.open(method, url, true);
	ajax.send();
	ajax.onreadystatechange = function () {
		if(this.readyState == 4 && this.status == 200) {
			let jsonObject = this.responseText;
			if(typeof jsonObject != "undefined"){
				if(jsonObject=="[]"){
					callback1();
				} else {
					callback2(jsonObject);
				}
			} else {
				callback3();
			}
		}
	}
}