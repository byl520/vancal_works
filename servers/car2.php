<?php
    include 'base.php';
    $login1=$_GET['login1'];
    $goodId=$_GET['goodId'];
    $res=mysql_query("SELECT * FROM car a,goods b WHERE a.user_id='$login1' and a.goods_id='$goodId' and b.goods_id='$goodId'");
    $row=mysql_fetch_assoc($res);
    echo json_encode($row);
?>