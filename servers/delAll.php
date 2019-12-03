<?php
include 'base.php';
$userId=$_GET['userId'];
mysql_query("delete from car where user_id=$userId");
?>