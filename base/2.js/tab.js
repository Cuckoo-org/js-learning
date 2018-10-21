
var tabBox = document.getElementById('tabBox'),
 oList = tabBox.getElementsByTagName('li'),
 oDivList = tabBox.getElementsByTagName('div');
 function change(index){
   for (var i = 0;i<oList.length;i++){
     oList[i].className='';
     oDivList[i].className='';
   }

   oList[index].className='select';
   oDivList[index].className='select';
 }
 //使用闭包方法实现
// for(var i =0;i<oList.length;i++){
//   ~function (i) {
//     oList[i].onclick=function () {
//       change (i);
//     }
//   } (i);
// }
// for(var i =0;i<oList.length;i++){
//   oList[i].onclick=(function (i) {
//     return function () {
//       change(i);
//     }
//   })(i);
// }
for(let i =0;i<oList.length;i++){
  oList[i].onclick=function(){
    change(i);
  }
}

 