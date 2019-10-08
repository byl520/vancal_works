$(function(){
	let form=document.querySelector('form')
    let inpts=document.querySelectorAll('input')
	$('.btn').on('click',function(){
		var mobile=$('[name="mobile"]').val();
		//var vCode=$('[name="vCode"]').val();
		var username=$('[name="username"]').val();
		var password= $('[name="password"]').val();
		var againPass = $('[name="againPass"]').val();
		
$.ajax({
			url: '../servers/register.php',
			type: 'get',
			data: {
				username: username,
				password: password,
				mobile: mobile,
//				vCode: vCode
			},
			success: function(res){
				alert("注册成功");

				setTimeout(function(){
				location.href = "../view/login.html";
				}, 2000)
			}
		})

	
		
	})
	
//	async function login11(){
//		let p1=await pAjax({
//			url:'../servers/register.php',
//			data:{
//				mobile:phone,
//				username:user,
//				passward:pass
//			}
//		})
//		if(p1==='登录成功'){
//			setCookie('login','22')
//			if(reg.test(src1.search)){
//				let aa=reg.exec(src1.search)
//				window.location.href=aa[1]
//			}else{
//				window.location.href='list.html'
//			}	
//		}
//	}
//	
	
});
