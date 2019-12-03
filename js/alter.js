	var getcookie=getCookie ('login');
	var fal=document.getElementById('false');
	getData3();
	async function getData3(){
	    var res=await pAjax({
	        url:'../servers/getLogin.php',
	        data:{
	            'id':getcookie
	        },
	        dataType:'json'
	    })
	    
		$('.phone1').val(JSON.parse(res).phone)
		$('.phone').val(JSON.parse(res).name)
		$('.pass').val(JSON.parse(res).pass)
    }
	
//	console.log(getcookie);//id
	let form=document.querySelector('form')
	let inpts=document.querySelectorAll('input');
	var a=false,c=false,d=false,e=false,f=false;
var phone = document.getElementsByClassName('phone1')[0];
//手机号码验证
phone.onblur = function () { 
if (!(/^1[3456789]\d{9}$/.test(phone.value))) {
    $(".div1").css({display:"block"});
}else{
    $(".div1").css({ display: "none" });
    a=true;
}
}
 


//用户名验证
var user = document.getElementsByClassName('phone')[0];
user.onblur=function(){
if (user.value == '') {
    $(".divqq").css({display:"block"});
} else {
    $(".divqq").css({ display: "none" });
    c = true;
}}

//登陆密码验证
var pass = document.getElementsByClassName('pass')[0];
pass.onblur = function () {
    if (!(/^[\w_-]{6,16}$/.test(pass.value))) {
        $(".div4").css({ display: "block" });
    } else {
        d = true;
        $(".div4").css({ display: "none" });
    }
}


//确认输入密码验证
var againpass = document.getElementsByClassName('againpass')[0];
againpass.onblur = function () {
    if (againpass.value != pass.value)  {
        $(".div5").css({ display: "block" });
    } else {
        e = true;
        $(".div5").css({ display: "none" });
    }
}

var form1=document.querySelector(".form11");
var che1 = document.querySelector(".checkbox");
che1.onclick=function(){
	if (che1.checked){
		f = true;
	}else{
		f = false;
	}

	if (a==true && c==true && d==true && e==true &&f==true) {
	
		$(".btn").css({ background: "rgb(180,32,37)" })
	}
}
var form1=document.querySelector('.form11');
form1.onsubmit=function(eve){
	eve = eve || window.event
	eve.preventDefault()
	console.log(a,c,d,e,f)
		if(a==true && c==true && d==true && e==true &&f==true){
		var mobile=$('[name="mobile"]').val();
		//var vCode=$('[name="vCode"]').val();
		var username=$('[name="username"]').val();
		var password= $('[name="password"]').val();
		var againPass = $('[name="againPass"]').val();
		getData()
			async function getData() {
				 var res = await pAjax({
					url: '../servers/modify.php',
					data: {
						"userid":getcookie,
						"username": username,
						"password": password,
						"mobile": mobile,
					},
					dataType:"json",
				})
		}
		$('#false').show();
		$('#yes').click(function(){
			window.location.href='login.html'
		})
	}
}
	

