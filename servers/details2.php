<?php
include 'base.php';
$login1=$_GET['login1'];
$userid=$_GET['userid'];
$str11=$_GET['str11'];
$str22=$_GET['str22'];
$opts=$_GET['opts'];
$res=mysql_query("insert into car(user_id,goods_id,goods_color,goods_size,goods_count) values ('$login1','$userid','$str11','$str22','$opts')");
$row=mysql_fetch_assoc($res);
?>