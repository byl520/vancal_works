<?php
	header("Content-Type:text/html;charset=utf-8");
	
	
	$username =$_GET["username"];
	
	$password=$_GET["password"];
	
	$mobile =$_GET["mobile"];
	
	
	$conn = mysqli_connect("localhost","root","root");
	
	mysqli_select_db($conn,"vancl");
	
	mysqli_query($conn,"set names utf8");
	
	$sql = "insert into user (name,pass,phone) values ('$username','$password','$mobile')";
	
	$row = mysqli_query($conn,$sql);//插入成功返回1，插入失败返回空
	echo $row;
	if($row){
		//保存成功表示注册成功
		//跳转到登录页
		echo "<script>alert('注册成功，请登录！');location.href='../view/login.html';</script>";
	}else{
		//保存失败表示注册失败
		//跳转到注册页
		echo "<script>alert('注册失败！');location.href='../view/register.html';</script>";
	}
?>