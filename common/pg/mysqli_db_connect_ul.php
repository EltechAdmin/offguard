<?php
// mysqli connection
function get_mysqli_connection() {
	//Production
	
	$host = '10.102.158.28';
	$user = 'tsadmin';
	$pass = 'password';
	$db = 'toolkit';
	
	
	//Local 
	/*
	$host = 'localhost';
	$user = 'root';
	$pass = '';
	$db = 'toolkit';
	*/
   $mysqli = new mysqli($host, $user, $pass, $db);

   if($mysqli->connect_error) {
     die('Connect Error (' . mysqli_connect_errno() . ') :'. mysqli_connect_error());
   } else {
   		return $mysqli;
	}
}
?>