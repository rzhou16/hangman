<?php
	$dbhost = "localhost";
	$dbuser = "id7740904_hangman";
	$dbpass = "hangman";
	$db     = "id7740904_hangman";
	
	$n = $_POST['name'];
	$s = $_POST['score'];
	
	$conn = new mysqli($dbhost, $dbuser, $dbpass, $db);
	
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	
	$sql = "INSERT INTO rank (name, score) VALUES ('$n', '$s')";

	if (mysqli_query($conn, $sql)) {
		echo "New record created successfully";
	} else {
		echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	}

	mysqli_close($conn);
?>