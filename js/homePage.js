var dls1=document.querySelectorAll('.dls')[0];
var dls2=document.querySelectorAll('.dls')[1];
var dls3=document.querySelectorAll('.dls')[2];
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
       str+=` <dl href="details.html?id=${item.goods_id}">
       <dt><img src="${item.goods_pics}"/></dt>
       <dd>
           <div class="name">${item.goods_name}</div>
           <div class="price">
               <span id="oldPrice">￥<b>${item.goods_price}</b></span>
               <span id="salePrice"><a href="details.html?id=${item.goods_id}"><b>点我购买</b></a></span>
           </div>
       </dd>
   </dl>
        `
    });
    data.ar2.forEach(item => {
       str2+=`<dl>
       <dt><img src="${item.goods_pics}"/></dt>
       <dd>
           <div class="name">${item.goods_name}</div>
           <div class="price">
               <span id="oldPrice">￥<b>${item.goods_price}</b></span>
               <span id="salePrice"><a href="details.html?id=${item.goods_id}"><b>点我购买</b></a></span>
           </div>
       </dd>
   </dl>
        `
    });

    data.ar3.forEach(item => {
        str3+=`<dl>
        <dt><img src="${item.goods_pics}"/></dt>
        <dd>
            <div class="name">${item.goods_name}</div>
            <div class="price">
                <span id="oldPrice">￥<b>${item.goods_price}</b></span>
                <span id="salePrice"><a href="details.html?id=${item.goods_id}"><b>点我购买</b></a></span>
            </div>
        </dd>
    </dl>
         `
     });
   
    dls1.innerHTML=str;
    dls2.innerHTML=str2;
    dls3.innerHTML=str3;
}


//倒计时
//获取结束时间
            var d1=new Date('2019-10-11')
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
