
	let form=document.querySelector('form')
	let inpts=document.querySelectorAll('input');
	var fal=document.getElementById('false');
	var a,b,c,d,e,f;
var phone = document.getElementsByClassName('phone1')[0];
//手机号码验证
phone.onblur = function () { 
if (!(/^1[3456789]\d{9}$/.test(phone.value))) {
	$(".div1").css({display:"block"});
	a=false;
}else{
    $(".div1").css({ display: "none" });
	a=true;

}
}

 

//验证码验证
var yzm = document.getElementsByClassName('ma')[0];
yzm.onblur = function () {
	
	if (!(/^LVX5GU$/i.test(yzm.value))) {
		$(".divq").css({ display: "block" });
		b = false;
	} else {
		$(".divq").css({ display: "none" });
		b = true;
	}}


//用户名验证
var user = document.getElementsByClassName('phone')[0];
user.onblur=function(){
if (user.value == '') {
	$(".divqq").css({display:"block"});
	c=false;
} else {
    $(".divqq").css({ display: "none" });
	c = true;

}}


//登陆密码验证
var pass = document.getElementsByClassName('pass')[0];
pass.onblur = function () {
    if (!(/^[\w_-]{6,16}$/.test(pass.value))) {
		$(".div4").css({ display: "block" });
		d=false;
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
		e = false;
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

	if (a == true && b == true && c == true && d == true && e == true && f == true) {
	
		$(".btn").css({ background: "rgb(180,32,37)" })
	}
}



form1.onsubmit=function(eve){
	eve = eve || window.event
	eve.preventDefault();
		if(a==true && b==true && c==true && d==true && e==true && f==true){
			

		var mobile=$('[name="mobile"]').val();
		//var vCode=$('[name="vCode"]').val();
		var username=$('[name="username"]').val();
		var password= $('[name="password"]').val();
		var againPass = $('[name="againPass"]').val();
    
     getData()

			
			async function getData() {
				 var res = await pAjax({
					url: '../servers/register.php',
					data: {
						"username": username,
						"password": password,
						"mobile": mobile,
					},
					dataType:"json",
				})
				if (res=="1") {//注册失败
					
				// window.location.href = "register.html";
					phone.value="";
					yzm.value="";
					user.value="";
					pass.value="";
					againpass.value="";
					che1.checked=false;
					// $(".btn").css({ background: "#C3C3C3" })
					fal.style.display='block';
			} else {
				var ids = JSON.parse(res)[0].user_id;
				// console.log(1111111)
					setCookie("login", ids);
					window.location.href = "homePage.html"

			}
			$('#yes').click(function(){
				$('#false').hide();
							$('.form1 input').val('');
							window.location.href = "register.html"
			});
		} 
		



			

		}
		
	}

	

