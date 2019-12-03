<?php
include 'base.php';
$login1=$_GET['login1'];
$res=mysql_query("SELECT * FROM car a,goods b WHERE a.user_id='$login1' and a.goods_id=b.goods_id ");
$arr1=[];
while($row=mysql_fetch_assoc($res)){
    array_push($arr1,$row);
}
echo json_encode($arr1);
?>