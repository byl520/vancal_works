<?php
	include 'base.php';
	$userid=$_GET["userid"];
	$username =$_GET["username"];
	$password=$_GET["password"];
	$mobile =$_GET["mobile"];
	$res2=mysql_query("UPDATE `user`SET name='$username',pass=$password,phone=$mobile WHERE user_id=$userid;");	
	$row2=mysql_fetch_assoc($res2);
	if($row2){
		echo '成功';
	}else{
		echo '失败';
	}
?>