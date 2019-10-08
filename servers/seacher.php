<?php
include 'base.php';
$ser=$_GET['ser'];
$num1=$_GET['num1'];
$size1=$_GET['size1'];
$first=($num1-1)*$size1;
$res=mysql_query("select * from goods where goods_name like '%$ser%' limit $first,$size1");
$arr=[];
while($row=mysql_fetch_assoc($res)){
    array_push($arr,$row);
}
$res2=mysql_query("select count(*) as count1 from goods where goods_name like '%$ser%'");
$count=mysql_fetch_assoc($res2);
$res3=mysql_query("SELECT * FROM goods where goods_name like '%$ser%' ORDER BY goods_price DESC");//降序 
$arr3=[];
while($row3=mysql_fetch_assoc($res3)){
    array_push($arr3,$row3);//把降序后的内容放入数组arr3
}

$res4=mysql_query("SELECT * FROM goods where goods_name like '%$ser%' ORDER BY goods_price ");//升序
$arr4=[];
while($row4=mysql_fetch_assoc($res4)){
    array_push($arr4,$row4);//把升序后的内容放入数组arr4
}

$arr2=["ar1"=>$arr,"count"=>$count,"desc"=>$arr3,"desc1"=>$arr4];
echo json_encode($arr2);
?>