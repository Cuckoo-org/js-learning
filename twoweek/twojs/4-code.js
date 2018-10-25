var codeBox = document.getElementById('codeBox');
//=>queryCode:获取当前验证码
function queryCode(){
    var result ='',
     areaStr="0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
     for(var i=0;i<4;i++){
         var ran = Math.round(Math.random()*61);
         char=areaStr[ran];
         //=>A和a也算重复该如何处理？
         //result="Ab""ab"
         //char="a" "a"
         //result.toLowerCase().indexOf(char.toLowerCase())===-1
         if(result.toLowerCase(). indexOf(char.toLowerCase())>-1){
            i--; 
            continue;
         }
         result += char;
     }
     codeBox.innerHTML=result;
}
queryCode();
codeBox.onclick = queryCode;