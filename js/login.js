
var form=document.querySelector('.form1')
var user=document.querySelector('.user')
var pass=document.querySelector('.pass')
var fal=document.getElementById('false')


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
		
		
		 var or=JSON.parse(p1).or;	
		if(or==='登录成功'){
			var ids=JSON.parse(p1).result[0].user_id;//获取用户id
			setCookie('login',ids);
			

			var src1 = window.location;
			var reg = /^\?path1=(.+)$/ 

			if(reg.test(src1.search)){
				
				let aa=reg.exec(src1.search)
				console.log(aa)
				window.location.href=aa[1];
			}else{
				window.location.href='homePage.html';
			}	
		}else if(or==='登录失败'){
			fal.style.display='block';
		}
	}
	
	//点击确认清空input
	$('#yes').click(function(){
			$('#false').hide();
            $('.form1 input').val('');
        });
	
}           
				   
					
			
			