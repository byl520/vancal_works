<?php
	include 'base.php';
	$user=$_GET['user1'];
	$pass=$_GET['pass1'];
$res=mysql_query("select * from user where name='$user' and pass='$pass'");
$arr1=[];
if($row=mysql_fetch_assoc($res)){
	array_push($arr1,$row);
	$arr2=['or'=>'登录成功','result'=>$arr1];
	echo json_encode($arr2);
}else{
    echo '失败';
}
?>