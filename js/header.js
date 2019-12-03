var login_user=getCookie("login")
//weixin二维码
$('.vx').hover(function(){
//	$('#qrcode').css('display','block')
	$('#qrcode').slideToggle()
},function(){
//	$('#qrcode').css('display','none')
	$('#qrcode').slideToggle()
})

//购物车显示
$('.shop').hover(function(){
	$('.shop1').css('display','block')
},function(){
	$('.shop1').css('display','none')
})

//导航栏
//$('.list').each(function(i){
//	$(this).hover(function(){
//		$(this).children(".sednav").slideDown('fast');
//	},function(){
//		$(this).children(".sednav").slideUp('slow');
//	})
//})

 $('.list').addClass('aa').hover(function () {
         $(this).children(".sednav").slideDown('fast');
    },function(){
		$(this).children(".sednav").slideUp('fast');
	})


//轮播图
//鼠标移入显示按钮,停止计时器
		$('.box').hover(function(){
			$('.button').show();
			stop();
		},function(){
			$('.button').hide()
			play()
		})
		$('.button').hover(function(){
			stop();
		})
		//定义图片索引、设置定时器
		var index=0;
		var Timer;
		//封装函数：显示当前索引图片及按钮变色
		function fn(){
			$('.igs').eq(index).fadeIn().siblings().fadeOut()
			$('.lis').eq(index).prop('id','on').siblings().removeProp('id')
			$('#on').css('background','orangered').siblings().css('background','rgba(204,204,204,.5)')
		}
		fn()

		//创建next按钮函数
		$('#next').click(function(){
			index++;
			if (index==$('.igs').length) {
				index=0;
			}
			fn()
		})
		//创建prev按钮函数
		$('#prev').click(function(){
			index--;
			if (index==-1) {
				index=$('.igs').length-1;
			}
			fn()
		})
		//设置定时器轮播
		function play(){
			Timer=setInterval(function(){
				index++;
				if (index==$('.igs').length) {
					index=0;
				}
				fn()
			},2500)
		}
		play()
		//清楚定时器
		function stop(){
			clearInterval(Timer)
		}
		
		//li点击事件
//		var lis=$('.lis')
//		for(var i=0;i<lis.length;i++){
//			lis[i].onmouseover=function(){
//				var myIndex=this.getAttribute('index')
//				index=myIndex
//				fn()
//			}
//		}
		$('.lis').each(function(i){
			$(this).hover(function(){
				var myIndex=$(this).attr('index')
				index=myIndex
				fn()
			})
		})

//在首页上显示购物车功能
login11=getCookie("login"); 
//获取shop1
var shop1=document.querySelector(".shop1")

getDatamin()
//从数据库中获取购物车里的东西
async function getDatamin(){
	var datamin=await pAjax({
		url:'../servers/car.php',
		data: {
				'login1': login11
			},
		dataType:'json'
	})
//	console.log(JSON.parse(datamin))
	//获取到数据了，现在我们要把数据进去了
	buildDatamin(JSON.parse(datamin))
}
//var strmin='';

function buildDatamin(datamin){
	var strmin=``;
	var prices=0;
	var count=0;
	datamin.forEach(item=>{
		strmin+=`
			<div class="list">
				<ul class="clearfix">
					<li style="width:36px;height:36px;"><img src=${item.goods_pics} style="width:100%;height:100%;"></li>
					<li style="width:160px;height:36px;margin-left:8px;">
						<p class="des">${item.goods_name}</p>
						<p><span>${item.goods_price}</span>X<b>${item.goods_count}</b></p>
					</li>
					<li><button index1='${item.car_id}' class="delcar">删除</button></li>
				</ul>
			</div>
		`
		prices+=Number(item.goods_price)*Number(item.goods_count)
		count+=Number(item.goods_count)
	})
	$('#count').text(`${count}`)
	datamin=''
	shop1.innerHTML=`
		<h3>最近加入的商品：</h3>	
	`+strmin+
	`	<div class="settle">				
			共计：<span>${prices}</span>
			<button class="now">立即结算</button>	
			<a class="gocar" style="cursor:pointer">查看购物车(<span>${count}</span>件)</a>
		</div>
	`
	$(".gocar").click(function(){
		if(!login_user){
			window.location.href="../view/login.html"
		}
		else{
			window.location.href="../view/cart.html"
		}
	})
	$(".delcar").click(function(){
		$(this).parent().parent().remove()
		var count=$(this).attr("index1")
//		console.log(count)
		//去删除数据库里的内容
		pAjax({
			url:'../servers/del.php',
			data:{
				count1:count
			}
		})
	})
}

//未登录时点击我的订单，和购物车，会到登录界面
$("#myorder").click(function(){
	if(!login_user){
		window.location.href="../view/login.html"
	}
	else{
		window.location.href="../view/cart.html"
	}
})
$("#i").click(function(){
	if(!login_user){
		window.location.href="../view/login.html"
	}
	else{
		window.location.href="../view/cart.html"
	}
})

