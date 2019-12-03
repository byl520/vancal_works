<?php
	include 'base.php';
	
	$count1=$_GET['count1'];
	mysql_query("delete from car where car_id=$count1");
?>