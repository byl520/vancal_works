// let src1=window.location;
// console.log(src1)


var loginuser= document.querySelector('.loginuser');
var loginBtn=document.querySelector('#login');
// console.log(loginBtn.href);
var login2=getCookie("login");
if(login2){
    getData3();
}

async function getData3(){
    var res=await pAjax({
        url:'../servers/getLogin.php',
        data:{
            id:login2
        },
        dataType:'json'
    })
//  console.log(res)
var loginName=JSON.parse(res).name;   
   loginuser.innerHTML=loginName;
// console.log(JSON.parse(res).name)
   loginBtn.innerHTML=`<a href="alter.html" id="modiPer">修改个人信息</a><a id="outPerson">退出</a>`;
    outPerson.onclick=function(){
       if(outPerson.innerHTML==='退出'){
           delCookie ('login');
       }
   }
}
  

