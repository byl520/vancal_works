<?php
 include 'base.php';
	$username =$_GET["username"];
	$password=$_GET["password"];
	$mobile =$_GET["mobile"];
	$res1=mysql_query("select * from user where name='$username'");	
	$row1=mysql_fetch_assoc($res1);
	
	 $arr=[];

	if($row1){
		echo "1";
	}else{
		$res2 = mysql_query("insert into user (name,pass,phone) values ('$username','$password','$mobile')");
		$res3=mysql_query("select * from user where name='$username'");	
		$row2=mysql_fetch_assoc($res3);
		array_push($arr,$row2);
	   echo json_encode($arr);
	}

?>