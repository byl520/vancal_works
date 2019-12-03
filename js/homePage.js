
var dls1=document.querySelectorAll('.addGoods11')[0];
var dls2=document.querySelectorAll('.addGoods11')[1];
var dls3=document.querySelectorAll('.addGoods11')[2];
getData()
async function getData(){
    var res=await pAjax({
        url:'../servers/homePage.php',
        dataType:'json'
    })
//  console.log(res)
    bindHtml(JSON.parse(res));
}
function bindHtml(data){
    var str=``;
    var str2=``;
    var str3=``;
    data.ar1.forEach(item => {
       str+=` <li class="getliss">
       <a href="details.html?id=${item.goods_id}">
           <h3>￥${item.goods_price}</h3>
           <p>${item.goods_name}</p>
           <img src="${item.goods_pics}" alt="img">
       </a>
   </li>
        `
       
    });
    
    data.ar2.forEach(item => {
       str2+=` <li class="getliss">
       <a href="details.html?id=${item.goods_id}">
           <h3>￥${item.goods_price}</h3>
           <p>${item.goods_name}</p>
           <img src="${item.goods_pics}" alt="img">
       </a>
   </li>
        `
      
    });

    data.ar3.forEach(item => {
        str3+=`<li class="getliss">
        <a href="details.html?id=${item.goods_id}">
            <h3>￥${item.goods_price}</h3>
            <p>${item.goods_name}</p>
            <img src="${item.goods_pics}" alt="img">
        </a>
    </li>
         `
     });
    
    dls1.innerHTML=str;
    dls2.innerHTML=str2;
    dls3.innerHTML=str3;
    var changeli=document.getElementsByClassName("addGoods11")[0];

    $(".addGoods11 li").hover(function(){
        $(this).addClass('on111').siblings().removeClass('on111');
    },function(){
    	$(this).removeClass('on111')
    });
}


//倒计时
//获取结束时间
             var d1=new Date('2019-10-13')
            //获取结束时间戳
            var t1=d1.getTime()
            //获取当前时间
            var d2=new Date()
            //获取当前时间戳
            var t2=d2.getTime()
            //求差
            var time=t1-t2
            //获取时间戳的秒数
            var intDiff=Math.floor(time/1000)
    	
//  var intDiff = parseInt(30000); //倒计时总秒数量
 
    function timer(intDiff) {
        window.setInterval(function() {
            var day = 0,
                hour = 0,
                minute = 0,
                second = 0; //时间默认值     
            if (intDiff > 0) {
//              day = Math.floor(intDiff / (60 * 60 * 24));
                hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
                minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
                second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
            }
            if (minute <= 9) minute = '0' + minute;
            if (second <= 9) second = '0' + second;
//          $('#day_show').html(day + "天");
            $('#hour_show').html('<s id="h"></s>' + hour );
            $('#minute_show').html('<s></s>' + minute );
            $('#second_show').html('<s></s>' + second );
            intDiff--;
        }, 1000);
    }
 
    $(function() {
        timer(intDiff);
    });
 

//在首页上显示购物车功能
login11=getCookie("login"); 
//获取shop1
var shop1=document.querySelector(".shop1")
$(".shop").hover(function(){
	getDatamin()
},function(){
	datamin=''
})

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
	datamin=''
	shop1.innerHTML=`
		<h3>最近加入的商品：</h3>	
	`+strmin+
	`	<div class="settle">				
			共计：<span>${prices}</span>
			<button class="now">立即结算</button>	
			<a class="gocar" href="cart.html">查看购物车(<span>${count}</span>件)</a>
		</div>
	`
	$(".delcar").click(function(){
		$(this).parent().parent().remove()
		var count=$(this).attr("index1")
		console.log(count)
		//去删除数据库里的内容
		pAjax({
			url:'../servers/del.php',
			data:{
				count1:count
			}
		})
	})
}	