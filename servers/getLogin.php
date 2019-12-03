<?php
include 'base.php';
$id=$_GET['id'];
$res=mysql_query("select * from user where user_id='$id'");
$row=mysql_fetch_assoc($res);
echo json_encode($row);
?>