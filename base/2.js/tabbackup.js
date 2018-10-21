//给每一个li绑定点击事件，点击的时候执行change方法，把当前点击li的索引传递进来，实现页卡的切换
for(var i= 0;i<oList.length;i++){
    oList[i].onclick=function(){
      //change(i);
      console.log(i);//=>3，不管点击哪个li输出的结果都是3，此处的i并不是想象中点击这个li的索引
    }
  }
  //->第一轮
  oList[0].onclick=function(){
    console.log(i);//给元素点击事件绑定方法，点击才执行，此处绑定属于创建函数，空间存储的都是字符串：i不是变量是字符。
  }
  //->第二轮
  oList[1].onclick=function(){
    'console.log(i);'
  }
  //->第三轮
  oList[2].onclick=function(){
    'console.log(i);'
  }
  //->循环结束 i=3
  //=>假设用户开始点击第二个Li:开始执行第二个绑定的方法（方法执行：形成一个新的作用域，把之前存储的字符串变为代码执行console.log(i)
  
 
 