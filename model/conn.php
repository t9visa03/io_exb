<?php
	try
	{
	 $dsn = "mysql:host=localhost;dbname=io_exb";
	 $db = new PDO ($dsn, "root", "test");
	 print ("Connected\n");
	}
	catch (PDOException $e)
	{
	 print ("Cannot connect to server\n");
	 print ("Error code: " . $e->getCode () . "\n");
	 print ("Error message: " . $e->getMessage () . "\n");
	}
?>