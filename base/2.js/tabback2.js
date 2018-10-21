/*点击哪一个li就让其有select这个样式类（对应的div也有这个样式类）
  其余的li(div)都把select样式移除即可
  *
  *不管点击哪一个li，首先让所有的li(div)都移除select，再让当前点击的有select样式。
*/
var tabBox = document.getElementById('tabBox'),
 oList = tabBox.getElementsByTagName('li'),
 oDivList = tabBox.getElementsByTagName('div');

 //=>创建一个函数实现页卡切换的功能
 function change(index){
   //->index（形参）实现方法时我们不知道用户点击的是哪一个li，设定一个入口，当用户点击需要页卡切换时，
   //只要执行change方法，并且把点击这个li的索引传递给我们，我们就可以在oList集合中通过索引获取到当前点击的这个li对象。
   //=>让所有的li(div)都移除select样式类
   for (var i = 0;i<oList.length;i++){
     oList[i].className='';
     oDivList[i].className='';
   }
   //让当前点击的这个li有select样式
   oList[index].className='select';
   oDivList[index].className='select';
 }
 //给每一个li绑定点击事件，点击的时候执行change方法，把当前点击li的索引传递进来，实现页卡的切换
 //->自定义属性
 for(var i= 0;i<oList.length;i++){
    oList[i].myIndex = i;
    oList[i].onclick= function(){
      //->this当前点击的这个li
      //this.myIndex:当前点击这个li的myIndex这个自定义属性的值
      change(this.myIndex);//->此处需要传递当前点击这个li的索引
    }
 }
//  i=0
//  oList[0].myIndex=0;
//  i=1
//  oList[1].myIndex=1;
//  i=2
//  oList[2].myIndex=2;
 