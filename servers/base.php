<?php
header('content-type:text/html;charset=utf8-8');
$conn=mysql_connect('localhost','root','root');
mysql_select_db('vancl',$conn);
mysql_query('set names utf8');
?>