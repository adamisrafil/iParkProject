<?php
// phpinfo();
	$servername = "localhost";
	$dbusername = "root";
	$dbpassword = "";
	$dbname = "ipark";

	$signUpFormFirstName = $_POST['signUpFormFirstName'];
	$signUpFormLastName = $_POST['signUpFormLastName'];
	$signUpFormSpotSelection = $_POST['signUpFormSpotSelection'];

	//todo sanitize the input

	$connection = new mysqli($servername, $dbusername, $dbpassword, $dbname);

	if ($connection->connect_error){
		die("Connection Failed: " . $connection->connect_error);
	}

	if (empty($signUpFormFirstName)){
		echo "First Name cannot be empty!";
		die();
	}
	if (empty($signUpFormLastName)){
		echo "Last Name cannot be empty!";
		die();
	}
	if (empty($signUpFormSpotSelection)){
		echo "Spot Selction cannot be empty!";
		die();
	}

	$sql = "INSERT INTO members (First_Name, Last_Name, Spot)
	VALUES ('$signUpFormFirstName', '$signUpFormLastName', '$signUpFormSpotSelection')";

	if ($connection->query($sql) === TRUE) {
		echo "Thank you! Your info has been entered into the database, you may close this window!";
	} else {
		echo "Error: " . sql . "<br>" . $connection->error;
	}

	$connection->close();
?>