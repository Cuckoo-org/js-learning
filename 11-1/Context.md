###作用域
如何查找当前作用域的上一级作用域？
看当前函数是在那个作用域下定义的，那么它的上级作用域就是谁 ->和函数在哪执行的没有任何关系

###内存释放和作用域销毁
> 堆内存：
> 对象数据类型或者函数数据类型在定义的时候首先都会开辟一个堆内存，堆内存有一个引用地址，如果外面有变量等知道了这个地址，我们就说这个内存被占用了，就不能销毁了
```javascript
var obj1 = {name:"张三"};
var obj2 = obj1;
//我们想要让堆内存释放/销毁，只需要把所有引用它的变量值赋值为null即可,如果当前的堆内存没有任何东西被占用了，那么浏览器会在空闲的时候把它销毁。。。
obj1 = null;
obj2 = null;
```
> 栈内存：
> 1、全局作用域：只有当页面关闭的时候全局作用域才会销毁
> 
> 2、私有的作用域（只有函数执行会产生私有的作用域）：一般情况下，函数执行会形成一个新的私有作用域，当私有作用域代码执行完成后，当前作用域都会主动的进行释放和销毁。
> 但是还是存在特殊情况的：
> 当前私有作用域中的部分内存被作用域以外的东西占有了，那么当前这个作用域就不能销毁了
> //a、函数执行返回了一个引用数据类型的值，并且在函数的外面被一个其他的东西给接收了，这种情况下一般形成的私有作用域都不会销毁。
```javascript
function fn(){
   var num = 100;
      return function(){
     
     }
}var f = fn();//fn执行形成的这个私有作用域就不能再销毁了。
```
b、在一个私有作用域中给DOM元素的事件绑定方法，一般情况下我们的私有作用域都不销毁

```javascript
var oDiv = document.getElementById("div1")
   function(){
   oDiv.onclick = function(){
   }
}();//当前自执行函数形成的这个私有作用域也不销毁
```

> ++i 和 i++：
> 都是自身累加1，在和其他的值进行运算的时候是有区别的
> i++；先拿i的值进行运算，运算完成本身在+1   
> ++i；先本身累加1，然后拿累加完成的结果去运算
```javascript
var i =5;
console.log(1+ i++);//->6 i=6;
console.log(1+(++i));//->i=6  =>7;
console.log(2+(i++)+(++i)+(++i)+(i++));//->30;
console.log(i);//->9;
```

------
###this关键字
> is中主要研究的都是函数中的this
> JS中的this代表的是当前行为执行的主体；JS中的context代表的是当前行为执行的环境（区域）；
//->例如：张文静在沙县小吃 吃蛋炒饭，this-> 张文静  context ->沙县小吃

//this是谁和函数在哪定义的和在哪执行的都没有任何关系：如何区分this呢？
> 1、函数执行，首先看函数名前面是否有"."，有的话，"."前面是谁this就是谁；没有的话this就是window
/ / 2、自执行函数中的this永远是window
/ / 3、给元素的某一个事件 绑定方法当事件触发的时候，执行对应的方法，方法中的this是当前的元素

```javascript
function fn(){
    console.log(this);
   }
   var obj = {fn:fn};
   fn();//this->window
   obj.fn();//this->object;  

function sum(){
   fn();//this->window
}
sum();

var oo ={
   sum:function(){
        //this->oo
       fn();//this->window
   }
 };
 oo.sum();
 //你以为 你以为的 就是你以为的
```

###小练习
```javascript
var num = 20;
var obj = {
   num:30,
   fn:(function (num)){
    this.num *=3;
    num += 15;
    var num = 45;
    return function(){
    this.num *= 4;
    num += 20;
    console.log(num);
    }
   }(num)//->把全局变量num的值20赋值给了自执行函数的形参，而不是object下的30，如果想是object下的30，就写obj.num
};
var fn = obj.fn;
fn();//->65
obj.fn();//->85
console.log(window.num, obj.num);//->240、120
```
![Alt text](./1541167212234.png)
