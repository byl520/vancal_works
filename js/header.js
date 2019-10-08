//二维码显示
$('.vx').hover(function(){
	$('#qrcode').css('display','block')
},function(){
	$('#qrcode').css('display','none')
})

//购物车显示
$('.shop').hover(function(){
	$('.shop1').css('display','block')
},function(){
	$('.shop1').css('display','none')
})

var list=$('.list')
for(var i=0;i<list.length;i++){
	list[i].onmouseover=function(){
		this.lastElementChild.style.display='block';
	}
	list[i].onmouseleave=function(){
		this.lastElementChild.style.display='none';
	}
}

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
			$('.igs').eq(index).show().siblings().hide()
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
		var lis=$('.lis')
		for(var i=0;i<lis.length;i++){
			lis[i].onmouseover=function(){
				var myIndex=this.getAttribute('index')
				index=myIndex
				fn()
			}
		}





