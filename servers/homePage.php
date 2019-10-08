<?php
include 'base.php';
$sql1='select * from goods where goods_name like "%T恤%" LIMIT 8';
$res=mysql_query($sql1);
 $arr1=[];
 $arr2=[];
 $arr3=[];
 $sql2='select * from goods where goods_name like "%衬衫%" LIMIT 8';
 $res2=mysql_query($sql2);
 $sql3='select * from goods where goods_price>618 LIMIT 8';
 $res3=mysql_query($sql3);

while($row=mysql_fetch_assoc($res)){
    array_push($arr1,$row);//把结果集放入数组
}
while($row2=mysql_fetch_assoc($res2)){
    array_push($arr2,$row2);
}
while($row3=mysql_fetch_assoc($res3)){
    array_push($arr3,$row3);
}

$arr4=["ar1"=>$arr1,"ar2"=>$arr2,"ar3"=>$arr3];
echo json_encode($arr4);
?>