`全局作用域`
> 当浏览器加载HTML页面的时候，首先会提供一个供全局js代码执行的环境（后台用global/js用window）
```javascript
var num = 12;
var obj = {name:'一只猫'，age:5};
function fn(){
    console.log('勿忘初心方得始终');
    
}
console.log(fn)//->把整个函数的定义部分（函数本身）在控制台输出
console.log(fn());//->把当前函数执行的返回结果（return后面写的是啥，返回值就是啥，如果没有return，默认返回值就是undefined）
```

2，`预解释`（变量提声）
> z在当前的作用域中，js代码执行之前，浏览器首先会默认的把所有带var和function的进行提前的声明或者定义
> //->理解声明和定义
>  var num = 12;
>  
> 声明（declare）: var num;告诉浏览器在全局作用域中有一个num的变量了->如果一个变量只是声明了
> 但是没有赋值默认值是undefined
> 
> 定义（defined）：num=12；->给我们的变量进行赋值
> 
> 对于带var和function关键字的在预解释的时候操作还是不一样的
> 
> var ->在预解释的时候只是提前的声明
> function ->在预解释的时候提前的声明+定义都完成了
> 
> 3.预解释只发生在当前的作用域下，例如：开始只对window下的进行预解释，只有函数执行的时候才会对函数中的进行预解释

3，js中内存的分类
`栈内存`：用来提供一个供JS代码执行的环境 ->作用域（全局作用域/私有作用域）
`堆内存`：用来存储引用数据类型的值 ->对象存储的是属性名和属性值，函数存储的是代码字符串。。。
```javascript
console.log(num);//->undefined
var num = 12;
console.log(num);
var obj = {name:'橘子'，age:3};
fn(100,200);//->可以在上面执行，因为预解释的时候声明+定义就已经完成了。
function fn(num1,num2){
    var total = num1+num2;
    console.log(total);
}
```


`如何区分私有变量和全局变量？`
 1.1.在全局作用域下声明（预解释的时候）的变量是全局变量；
 1.2在私有作用域中”声明的变量“和”函数的形参“都是私有的变量；在私有作用域中，我们代码执行的时候遇到了一个变量，首先我们需要确定它是否为私有的变量，如果有私有的变量，那么和外面的没有任何关系：如果不是私有的，则往当前作用域的上级作用域继续查找，如果上级作用域也没有则继续查找，一直找到window为止（作用域链）、、

//2、当函数执行的时候（直接目的：让函数中的代码执行），首先会形成一个新的私有作用域（然后按照如下的步骤执行）：
//2.1如果有形参，先给形参赋值
//2.2进行私有作用域中的预解释
//2.3私有作用域中的代码从上到下执行
//...
//函数形成一个新的私有的作用域保护了里面的私有变量不受外界的干扰（外面修改不了私有的，私有的也改变不了外面的）-->“闭包”

```javascript
console.log(total);//->undefined
var total = 0;
function fn(num1,num2){
    console.log(total);//->undefined
    var total = num1 +num2;
    console.log(total);//->300
}
fn(100,200)
console.log(total)//->0;
```

在全局作用域中：带var和不带var的关系
> 区别：带var的可以进行预解释，所以在赋值的前面执行不会报错；不带var的是不能进行预解释的，在前面执行会报错   

```javascript
console.log(num);//->undefined
var num = 12;

console.log(num2);//->Uncaught ReferenceError: num2 is not defined  num2不存在
num2 = 12;
```
> 关系：num2=12 ->相当于给window增加了一个叫做num2的属性名，属性值是12
> var num =12；->首先它相当于给全局作用域增加了一个全局变量num，但是不仅如此，它相当于给window增加了一个属性名num2，属性值是12

```javascript
var num = 12;
console.log(num);//->12

num2 = 12;
console.log(num2);//->12 相当于window.num2
```
![Alt text](./1541078740459.png)


> in:"num"in window 判断num是否为window这个对象的一个属性，是的话返回true，不是的话返回false

```javascript
//var obj = {name:"橘子"，age:3};
//console.log("name"in obj)//->true
//console.log("eat" in obj)//->false
//1、预解释的时候不管你的条件是否成立，都要把带var的进行提前的声明
//window的预解释：var num;->window.num;
if (!("num"in window)){//"num" in window ->true
    var num = 12;
}
console.log(num);//->undefined

//2、预解释的时候只预解释"="左边的是值，不参与预解释
//匿名函数之函数表达式：把函数定义的部分当做一个值赋值给我们的变量/元素的某一个事件
//window下的预解释：var fn;
fn();->undefined() ReferenceError: fn is not a function
var fn = function(){
  console.log("ok");
}

fn();//->"ok"
function fn(){
   console.log("ok");
}
fn();->"ok "
```

`自执行函数：定义和执行一起完成了` 
> 执行函数定义的那个function在全局作用域下不进行预解释，当代码执行到这个位置的时候定义和执行一起完成了
```javascript
//->如下都是自执行函数
(function(num){})(100);
~function(num){}(100);
+function(num){}(100);
-function(num){}(100);
!function(num){}(100);

```

` 函数体中return下面的代码虽然不再执行了，但是需要进行预解释;return后面跟着的都是我们返回的值，所以不进行预解释 `
```javascript
function fn(){
  //预解释:var num;
  console,log(num);//->undefined
  return function(){
    }
    var num = 100;
}
fn();
```

`如果在预解释的时候，如果名字已经声明过了，不需要重新的声明，但是需要重新的赋值`
在JS中如果变量的名字和函数的名字重复了，也算冲突
```javascript

var fn = 13;
function fn(){
   console.log("ok");
}
```