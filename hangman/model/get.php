<?php
	$dbhost = "localhost";
	$dbuser = "root";
	$dbpass = "";
	$db     = "hangman";
	
	$conn = new mysqli($dbhost, $dbuser, $dbpass, $db);
	
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	} 
	
	$result = mysqli_query($conn, "SELECT * FROM rank ORDER by score");
	$data = array();
	while($row = mysqli_fetch_assoc($result)) {
			$data[] = $row;
	}

	echo json_encode($data);
	mysqli_close($conn);
?>