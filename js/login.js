let src1=window.location;
var form=document.querySelector('.form1')
var user=document.querySelector('.user')
var pass=document.querySelector('.pass')
form.onsubmit=function(e){
	e = e || window.event
	e.preventDefault()
	
	let user2=user.value
	let pass2=pass.value
	login11()
	async function login11(){
		let p1=await pAjax({
			url:'../servers/login.php',
			dataType:'json',
			data:{
				user1:user2,
				pass1:pass2
			}
			
		})
		var uname=JSON.parse(p1).result[0].name;
		var upass=JSON.parse(p1).result[0].pass;
		 var ids=JSON.parse(p1).result[0].user_id;//获取用户id
		 var or=JSON.parse(p1).or;//获取到返回登录状态	
		if(or==='登录成功'){
			setCookie('login',ids);
				
		}
	}
}           
				   
					
			
			