var codeBox = document.getElementById('codeBox');
//=>queryCode:获取当前验证码
function queryCode(){
    var result ='',
     areaStr="0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
     for(var i=0;i<4;i++){
         var ran = Math.round(Math.random()*61);
         char=areaStr[ran];
         //=>验证一下新获取到的char字符是否已经在result中存在了，如果存在了我们不存储，再重新获取一遍，反之则累加到result中
         if(result.indexOf(char)>-1){
            i--; 
            continue;

         }
         result += char;
     }
     codeBox.innerHTML=result;
}

queryCode();


codeBox.onclick = queryCode;