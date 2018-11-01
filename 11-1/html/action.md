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