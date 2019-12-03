
var src1 = window.location;
var container = document.querySelector(".container");
var reg = /^\?id=(\d+)$/;
var ids1 = reg.exec(src1.search)[1];
// console.log(ids1)
if (!reg.test(src1.search)) {
    var str = `
       <div class="jumbotron">
         <p class="p1">没有该商品，请重新选择商品</p>
         <a href="homePage.html" >点击，返回商品列表</a>
        </div>
    `
    container.innerHTML = str;
} else {
    //把字符串中符合正则要求的第一项以及一些其他信息，以数组的形式返回，要获取?id=5中的5，在数组中的第二个元素
    getData(ids1);
    // console.log(ids1)
}
async function getData(id1) {
    var res = await pAjax({
        url: '../servers/details.php',
        data: {
            'id': id1
        },
        dataType: 'json'
    })
    bindHTML(JSON.parse(res))
    // console.log(JSON.parse(res))
}
function bindHTML(data) {
    //data是一个对象，不用遍历，要获取对象下面的属性，用点
    var str2 = `
    <div id="false">
		<p>商品已加入购物车</p>
		<button id="jixu">
			继续购物
		</button>
		<button id="jiesuan">
			去结算
		</button>
	</div>
   <div id="top1">
    <div class="top1-cont">
        <p>${data.goods_name}</p>
        <ul>
            <li><a href="">产品描述</a></li>
            <li><a href="">评论</a></li>
            <li class="li1"><a href="">提问</a></li>
        </ul>
    </div>
</div>


<div id="main">
    <div class="main-cont">
        <div class="left">
            <div class="box1"><img src="${data.goods_pics}" alt=""></div>
            <div class="box1"><img src="${data.goods_pics}" alt=""></div>
            <div class="box1"><img src="${data.goods_pics}" alt=""></div>
        </div>


        <div class="center">
            <!-- 放大镜 -->
            <div class="leftBox">
                <img src="${data.goods_pics}" alt="" class="smallImg">
                <div class="mask"></div>
            </div>
            <div class="rightBox">
                <img src="${data.goods_pics}" alt="" class="bigImg">
            </div>
        </div>


        <div class="right">
            <div class="div1">售价：&nbsp;&nbsp;￥<p>${data.goods_price}</p>充100返100,&nbsp;<a href="">点击充值</a></div>
            <div class="div2">
                <p>颜色：</p>
                <ul class="ul1">
                    <li class="current">黑色</li>
                    <li class="old">白色</li>
                    <li class="old">灰色</li>
                    <li class="old">浅绿色</li>
                </ul>
            </div>

            <div class="div3">
                <p>尺码：</p>
                <ul class="ul2">
                    <li class="old">L</li>
                    <li class="old">XL</li>
                    <li class="old">2XL</li>
                    <li class="old">3XL</li>
                    <li class="old">4XL</li>
                    <li class="old">5XL</li>
                </ul>
            </div>
<div class="div3-1">请选择您要购买的商品尺寸</div>
            <div class="div4">
                <p>数量：</p>
                <select name="" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <div class="div5">
                <p class="p1">已选：</p>
                <p class="p22"></p>
                <p class="p3">现在有货</p>
            </div>

            <div class="div6">
                <button class="btn1" type="submit">立即购买</button>
                <button class="btn2" type="submit">加入购物车</button>
            </div>

            <img src="../images/tu_03.jpg" alt="" class="tu">
         

        </div>
    </div>

</div>
              
    `
    container.innerHTML = str2;
    
   
    //放大镜
    var leftBox = document.querySelector(".leftBox");
    var smallImg = document.querySelector(".smallImg");
    var mask = document.querySelector(".mask");
    var rightBox = document.querySelector(".rightBox");
    var bigImg = document.querySelector(".bigImg");
    var p2=document.querySelector(".p22");
    p2.innerHTML="黑色";
    function fn(e) {
        var e = e || event;
        var left = e.pageX - leftBox.offsetLeft - mask.offsetWidth / 2;
        var top = e.pageY - leftBox.offsetTop - mask.offsetHeight / 2;
        var minL = 0;
        var maxL = leftBox.offsetWidth - mask.offsetWidth;
        var minT = 0;
        var maxT = leftBox.offsetHeight - mask.offsetHeight;
        var rightLift = 0;
        var rightTop = 0;
        if (left <= minL) {
            mask.style.left = minL + "px";
            rightLift = minL;
        }
        else if (left >= maxL) {
            mask.style.left = maxL + "px";
            rightLift = maxL;
        }
        else {
            mask.style.left = left + "px";
            rightLift = left;
        }
        if (top <= minT) { mask.style.top = minT + "px"; rightTop = minT; }
        else if (top >= maxT) { mask.style.top = maxT + "px"; rightTop = maxT }
        else { mask.style.top = top + "px"; rightTop = top }
        bigImg.style.left = -2 * rightLift + "px";
        bigImg.style.top = -2 * rightTop + "px";
    }
    leftBox.onmouseover = function (e) {
        var e = e || window.event;
        mask.style.display = "block";
        rightBox.style.display = "block";

    }
    leftBox.onmousemove = function (e) {
        var e = e || window.event;
        mask.style.display = "block";
        rightBox.style.display = "block";
        fn(e)
    }
    leftBox.onmouseout = function () {
        mask.style.display = "none";
        rightBox.style.display = "none";
    }
    var str11='黑色';
    var str12='';
    var ul1=document.getElementsByClassName("ul1")[0];
    ul1.onclick=function(e){
        str11='';
        p2.innerHTML="黑色";
        var e = e || event;
        var target = e.target || e.srcElement;
        for (var i = 0; i < ul1.children.length; i++) {
            ul1.children[i].className = "old";
        }
        if (target.tagName.toLowerCase() == "li") {
            target.className = "current";
            str11=target.innerHTML;
            str12 = str11 + ',' + str22;
            p2.innerHTML=str12;
        }  
        
    }
    var a = false;
var ul2=document.getElementsByClassName("ul2")[0];
    
var str22='';
ul2.onclick=function(e){
    str12='';
    var e = e || event;
        var target = e.target || e.srcElement;
        for (var i = 0; i < ul2.children.length; i++) {
            ul2.children[i].className = "old";
        }
        if (target.tagName.toLowerCase() == "li") {
            target.className = "current";
            str22 = target.innerHTML;
            str12 =str11+','+str22;
            p2.innerHTML=str12;
            a = true;
            $(".div3-1").css("display", "none")
        }
        
}
    var btn1=document.querySelector(".btn1");
    var btn2 = document.querySelector(".btn2");
    btn1.onclick=function () {
        if (a == false) {
            $(".div3-1").css("display", "block")
        }else{
            var login=getCookie("login");
            var opts= $("option:selected").val();//获取到用户id
            if(!login){
                var srcurl="details.html"+src1.search;
                window.location.href = `login.html?path1=${srcurl}`; 
            }else{
                getData2()
                async function getData2() {
                    var res = await pAjax({
                        url: '../servers/details2.php',
                        data: {
                            'str11':str11,
                            'str22':str22,
                            'opts':opts,
                            'login1': login,
                            'userid':ids1
                        },
                        dataType: 'json'
                    })
                    // console.log(JSON.parse(res))
                }
                src1.href=`rightBuy.html?id=${ids1}`;
            } 
        }
        // src1.href='cart.html';
    } 

    btn2.onclick = function () {
        if (a == false) {
            $(".div3-1").css("display", "block")
        }else{
          
        var login=getCookie("login");//获取到用户id
        var opts= $("option:selected").val();//获取到下拉框的商品数量
            if(!login){
                var srcurl="details.html"+src1.search;
                window.location.href = `login.html?path1=${srcurl}`; 
                }else{
                    getData2()
                    async function getData2() {
                        var res = await pAjax({
                            url: '../servers/details2.php',
                            data: {
                                'str11':str11,
                                'str22':str22,
                                'opts':opts,
                                'login1': login,
                                'userid':ids1
                            },
                            dataType: 'json'
                        })
                        // console.log(JSON.parse(res))
                    }
                    $('#false').show();
                    $('#jixu').click(function(){
                        window.location.href='homePage.html';
                    })
                    $('#jiesuan').click(function(){
                        window.location.href = 'cart.html';
                    })    
                }
            
        }
    } 







}


  






    











