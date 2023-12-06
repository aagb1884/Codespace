<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$name = $_POST['name'];
	$description = $_POST['description'];
	$imageURL = $_POST['imageURL'];
	$price = $_POST['price'];
	
	// do something with the form data, such as storing it in a database or sending an email
	
	echo "Thank you for submitting the form!";
} else {
	// the form wasn't submitted properly
	echo "There was an error submitting the form.";
}
?>