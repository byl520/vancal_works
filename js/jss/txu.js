pageinfo2={
    pagenum:1,
    pagesize:12,
    total:500,
    totalpage:100
}
let content=document.querySelector('.content');
let form=document.querySelector('form');
let serinpt=document.querySelector('#text');
var strs;
window.onload=function(e){
    e=e||window.event;
    e.preventDefault();
    let ser='T恤';
    sercher();
    async function sercher(){
        let res=await pAjax({
            url:'../servers/seacher.php',
            data:{
                ser:ser,
                num1:pageinfo2.pagenum,
                size1:pageinfo2.pagesize
            },
            dataType:'json'
        })
        let data=JSON.parse(res);
        pageinfo2.total=data.count.count1-0
	    pageinfo2.totalpage=Math.ceil(data.count.count1/pageinfo2.pagesize)
        bindHtml(data) 
    }	
	
	strs=`
        <div class="assort">
			<div class="breadnav">
				<div class="location">
					<span>当前位置：</span>
					<a class="track" href="#">所有分类</a>
				</div>
				<div class="find">
					找到和<span>T恤</span>相关商品<span>60</span>款
				</div>
			</div>
			
			<div class="selectarea">
				<div class="selectareaLeft">
					T恤
				</div>
				<div class="selectareaRight">
					<ul>
						<li>
							<a href="#">崔海军</a>
						</li>
						<li>
							<a href="#">周南</a>
						</li>
						<li>
							<a href="#">长场雄</a>
						</li>
						<li>
							<a href="#">药</a>
						</li>
						<li>
							<a href="#">本广</a>
						</li>
						<li>
							<a href="#">全部</a>
						</li>
					</ul>
				</div>
			</div>
			
			<div class="floatdiv">
				<div class="filterForm">
					<div class="searchCol">
						<ul>
							<li>
								<a href="#"><em>默认</em><span class="iconfont">&#xe7f2;</span></a>
							</li>
							<li>
								<a href="#"><em>销量</em><span class="iconfont">&#xe7f2;</span></a>
							</li>
							<li>
								<a href="#"><em>好评</em><span class="iconfont">&#xe7f2;</span></a>
							</li>
							<li>
								<a href="#"><em>最新</em><span class="iconfont">&#xe7f2;</span></a>
							</li>
							<li class="last1">
								<a href="#"><em>价格</em><span class="iconfont">&#xe7f2;</span></a>
								<div class="sednav1">
									<ol>
										<li class="up">
											<a href="#"><em>价格</em><span class="iconfont">&#xe7f1;</span></a>
										</li>
										<li class="down">
											<a href="#"><em>价格</em><span class="iconfont">&#xe7f2;</span></a>
										</li>
									</ol>
								</div>
							</li>
						</ul>
					</div>
					
					<div class="searchbarPrice">
						合并同款
					</div>
					
				</div>
			</div>
		</div>
        
        <div class="div1"></div><div class="dls">`
	
	function fn(){
		$('.last1').hover(function(){
		 	$('.sednav1').css('display','block')
		 	$('.last1').css('background-color','#fff')
		 },function(){
			$('.sednav1').css('display','none')
			$('.last1').css('background-color','#eee')
		 })
	
		 $('.sednav1').hover(function(){
			 $('.last1').css('background-color','#eee')
		 },function(){
			 $('.last1').css('background-color','#fff')
		 })
		 
		 
		 var up=document.querySelector('.up');
         up.addEventListener('click',sort1);
         var down=document.querySelector('.down');
         down.addEventListener('click',sort);
	}
	
	
    function bindHtml(data){
    	var str=strs;

        data.ar1.forEach(item => {
            str+=` <a href="details.html?id=${item.goods_id}"><dl>
       		<dt><img src="${item.goods_pics}"/></dt>
       		<dd>
           		<div class="name">${item.goods_name}</div>
           		<div class="price">
               		<span id="oldPrice">￥<b>${item.goods_price}</b></span>
               		<span id="salePrice"><b>点我购买</b></span>
           		</div>
       		</dd>
   		</dl></a>
             `
         });
         str+='</div>'
         content.innerHTML=str;
         let div1=document.querySelector('.div1')
         fenye(div1);
         fn();
		 cha()
		}
    
    async function sort(){
        let res2=await pAjax({
            url:'../servers/seacher.php',
            data:{
                ser:ser,
                num1:pageinfo2.pagenum,
                size1:pageinfo2.pagesize
            },
            dataType:'json'
        })
        let data=JSON.parse(res2);
        pageinfo2.total=data.count.count1-0
	    pageinfo2.totalpage=Math.ceil(data.count.count1/pageinfo2.pagesize)
        bindHtml2(data);
    }
    
    async function sort1(){
        let res2=await pAjax({
            url:'../servers/seacher.php',
            data:{
                ser:ser,
                num1:pageinfo2.pagenum,
                size1:pageinfo2.pagesize
            },
            dataType:'json'
        })
        let data=JSON.parse(res2);
        pageinfo2.total=data.count.count1-0
	    pageinfo2.totalpage=Math.ceil(data.count.count1/pageinfo2.pagesize)
        bindHtml3(data);
    }

    function bindHtml2(data){
    	var str=strs;

        data.desc.forEach(item => {
            str+=` <a href="details.html?id=${item.goods_id}"><dl>
       		<dt><img src="${item.goods_pics}"/></dt>
       		<dd>
           		<div class="name">${item.goods_name}</div>
           		<div class="price">
               		<span id="oldPrice">￥<b>${item.goods_price}</b></span>
               		<span id="salePrice"><b>点我购买</b></span>
           		</div>
       		</dd>
   		</dl></a>
             `
         });
         str+='</div>'
         content.innerHTML=str;
         let div1=document.querySelector('.div1')
         fenye(div1);
         fn();

         
    }
    
    
    function bindHtml3(data){
    	var str=strs;

        data.desc1.forEach(item => {
            str+=` <a href="details.html?id=${item.goods_id}"><dl>
       		<dt><img src="${item.goods_pics}"/></dt>
       		<dd>
           		<div class="name">${item.goods_name}</div>
           		<div class="price">
               		<span id="oldPrice">￥<b>${item.goods_price}</b></span>
               		<span id="salePrice"><b>点我购买</b></span>
           		</div>
       		</dd>
   		</dl></a>
             `
         });
         str+='</div>'
         content.innerHTML=str;
         let div1=document.querySelector('.div1')
         fenye(div1);
         fn();
 
    }
	
    function fenye(ele){
        new Pagination(ele,{
            pageInfo:pageinfo2,
            textInfo:{
                first: '首页',
                prev: '上一页',
                next: '下一页',
                last: '尾页'
            },
            async change(n){
                if(pageinfo2.pagenum===n) return
                pageinfo2.pagenum=n
                var res2=await pAjax({
                    url:'../servers/seacher.php',
                    data:{
                        num1:pageinfo2.pagenum,
                        size1:12,
                        ser:ser
                    },
                   dataType:'json'
                })
                // console.log(JSON.parse(res2))
                bindHtml(JSON.parse(res2))
            }
        })
    }
     
}

function cha(){
	$('.selectareaRight').on('click','a',function(){
        var word=this.text
//      $(this).css('cursor: pointer;')
        if(word=="全部"){
        	window.onload()
        }
//      console.log(word)
		cha1()
        async function cha1(){
        	let res6=await pAjax({
	            url:'../servers/kind.php',
	            data:{
	                word1:word
	            },
	            dataType:'json'
	        })
        	//把数据放进去
//      	console.log(res6)
        	bulidKind(JSON.parse(res6))
        }
       
    
    })
}
function bulidKind(res){
	var str=strs;

        res.forEach(item => {
            str+=` <a href="details.html?id=${item.goods_id}"><dl>
       		<dt><img src="${item.goods_pics}"/></dt>
       		<dd>
           		<div class="name">${item.goods_name}</div>
           		<div class="price">
               		<span id="oldPrice">￥<b>${item.goods_price}</b></span>
               		<span id="salePrice"><b>点我购买</b></span>
           		</div>
       		</dd>
   		</dl></a>
             `
         });
         str+='</div>'
         content.innerHTML=str;
         cha()
}
