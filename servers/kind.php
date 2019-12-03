<?php
	include 'base.php';
	
	$word=$_GET['word1'];
	
	$res=mysql_query("select * from goods where goods_name like '%$word%'");
	$row=mysql_fetch_assoc($res);
	$kinds=[];
	while($row){
		array_push($kinds,$row);
		$row=mysql_fetch_assoc($res);
	}
	
	echo json_encode($kinds);
//echo $word;
?>