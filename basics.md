###  javascript 
> ECMAscript(ES)：规定了js一些基础核心的知识（变量，数据类型，语法规范，操作语句等）3 / 5==6 / 7 版本！
> DOM: document object model   文档对象模型，里面提供了一些属性和方法，可以让我们操作页面中的元素。
> BOM: browser  object model 浏览器对象模型 ，里面提供了一些属性和方法，可以让我们操作浏览器。

###变量和常量
>变量：值是可以变的
>常量：值是不可以变的

```  javascript
// => Js中定义变量的方式
// var  变量名 = 值；(ES6中定义变量使用let)
var num = 12;
var str = 'nice team';

//=>JAVA等后台语言定义变量比较严谨，JS比较松散。
//int num =12;
//float num =12.5;
//double num =3.141592654;

console.log(num);//=>12,变量其实是一个无意义的名字，它所代表的意义都是其存储的那个值

num = 13；//=>让原有的num变量存储的值修改为13（变量只能代表一个值）

```

``` javascript
//=>任何一个具体的数据值都是常量，例如：12就是一个常量

//=> 和变量类似，我们设置一个常量（也是一个名字），给其存储一个值，但是这个存储的值不能修改

const num = 12;//定义一个常量num，给它存储12；
num = 13；//=>Uncaught TypeError: Assignment to constant variable.常量存储的值是不能修改的。

```
------


###js中的命名规范
- 1，JS中严格区分大小写
```javascript
var test = 'mingtian';
var Test = 'genghao';
console.log(test);//=>'mingtian'test和Test是两个不同的变量
```
2，遵循国际命名规则：‘驼峰命名法’
>第一个单词首字母小写，其余每一个有意义的单词首字母大写
```javascript
var studentInfo;
命名使用英文单词，不要使用拼音
不是所有单词都能简写，我们要保证大家看到名字后知道所代表的的意思


info：information :信息
init：Initialization :初始化
add/insert/create:增加创建插入
remove/rm/clear/del/delete:删除
update：修改
get/query / select: 查询 获取  ···
```
3，命名的时候可以使用 `$, _, 数字，字母`，但是数字不能作为名字的第一位
```javascript
var student_info;
var $xxx;//=>一般都是应用JQ获取到的值
var _xxx;//=>一般这样的情况代表变量是一个全局或者公用的变量
```

4，JS中很多的词都是有特殊含义的，我们叫这些词`关键词`；现在没有特殊含义的，以后可能会用作为关键词的，我们称为`保留字`：而关键字和保留字都不可以随便用来命名；

关键字
----------
![Alt text](./1539586176520.png)

保留字
----------
![Alt text](./1539586227107.png)

------

###js中的数据类型
> - 基本数据类型（值类型）
>  + number：数字
>  + string : 字符串
>  + boolean :布尔
>  + null :空对象指针
>  + undefined ：未定义
> - 引用数据类型
>  + object对象数据类型
> + {}普通对象
> + []数组
> + /^$/正则
> + ......
>    + function函数数据类型

```javascript
12 12.5 -12.5 0
'mingtian' "明天" =>单双引号包裹起来的都是字符串（单双引号没区别）
true false =>布尔类型：只有两个值
null
undefined 

{name:;'mt',age:6}
[12,45,78]
/^-?(\d|([1-9]\d+))(\.\d+)?$/
function fn(){}
...
```

这么多数据类型js如何去检测呢？
- typeof: 检测数据类型的运算符
- instanceof: 检测某个实例是否属于这个类
- constructor: 获取当前实例的构造器
- Object.prototype.tostring.call: 获取当前实例的所属类信息

*typeof*
 > 使用typeof检测，返回结果是一个字符串，字符串中包含的内容证明了值是属于什么类型的
 > 
 > 局限性
 > 1，typeof null不是'null'而是'object':因为null虽然是单独的一个数据类型，但是它原本意思是空对象指针，浏览器使用typeof检测的时候会把它按照对象来检测
 > 2，使用typeof无法具体细分出到底是数组还是正则，因为返回的结果都是'object'

```javascript
typeof 12 =>"number"

var num =13;
typeof num =>"number"
```


----------
![Alt text](./1539594247708.png)
![Alt text](./1539594683978.png)

腾讯的面试题：
```javascript
console.log(typeof typeof[]);
type[] ->"object"
typeof "object" ->"string"
```

------
###布尔类型
**Boolean()**
> 把其他数据类型的值转化为布尔类型
> 
> 只有'0,NaN,空字符串，null，undefined'这五个数据值转换为布尔类型的false,其余都会转换为true。

![Alt text](./1539596554961.png)

**'!'**
> !=:不等于
>  叹号在js中还有一个作用：'取反'，先把值转换为布尔类型，然后再取反
![Alt text](./1539597082714.png)

**'!!'**
> 在一个叹号取反的基础上再取反，取两次反相当于没有做操作，但是已经把其它类型值转换为布尔类型了，和boolean是相同的效果
![Alt text](./1539597367878.png)
------
###字符串
 > 在js中单引号和双引号包起来的都是字符串
```javascript
12 - >number
'12' ->string
'[12,23]' ->string
```
 常用方法：
 charAt  charCodeAt
 substr  supstring slice
 toUpperCase  toLowerCase
 indexOf lastIndexOf
 split
 replace
 match
 ......

------
###number数字
> 0 12 - 12 12.5,js中多增加了一个number类型的数据：'NaN' =>Not a  number
> typeof NaN ->"number"


**`NaN`**
> Not a number:不是一个数，但是属于number类型
> 
> NaN == NaN : false,NaN和任何其它值都不相等

**`isNaN()`**
> 用来检测当前这个值是否是非有效数字，如果不是有效数字检测的结果是true，反之是有效数字则为false
```javascript
isNaN(0) ->false
isNaN(NaN) ->true

isNaN('12') ->false 当我们使用isNaN检测值的时候，检测的值不是number类型的，浏览器会默认把值转换为number类型，然后再去检测
isNaN([]) ->false
isNaN(true) ->false
```

**`number()`**
> 把其它数据类型值转化为number类型值
```javascript
Number('12') ->12
Number('12px') ->NaN  在使用Number转换的时候只要字符串中出现任何一个非有效数字字符，最后结果都是NaN

Number(true) ->1
Number(false) ->0

Number(null) ->0
Number(undefined) ->NaN

Number([]) =>把引用数据类型转换成Number，首先需要把引用数据类型转为字符串(tostring),在把字符串转换为Number即可 例如：[] ->'''' ->0
Number([12]) =>[12]->'12' '12'->12
Number([12,23]) =>[12,23]->"12,23" ->NaN

Number({}) =>NaN
```

**`parseInt()`**
> 也是把其它数据类型值转换为number，和Number方法在处理字符串的时候有所区别
```javascript
Number('12px') ->NaN
parseInt('12px') ->12
parseInt('12px13') ->12  提取规则：从左至右依次查找有效数字字符，直到遇见非有效数字字符为止（不管后面是否还有，都不找了），把找到的转换为数字 
Number('px12') ->NaN
```

**`parseFloat()`**
> 在parseInt的基础上可以识别小数点
``` javascript
 parseInt('12.5px') ->12
 parseFloat('12.5px') ->12.5
```
![Alt text](./1539610308242.png)

------
###null和undefined
> null:空，没有
> undefined：未定义，没有
> 
> ''：空字符串，没有
> 0：也可以理解为没有

`空字符串和null的区别`
> 都是去种树
> 空字符串属于挖了个坑，但是没有种任何东西
> null是连坑都没挖
> 
> 空字符串相对于null来说开辟了内存，消耗了那么一丢丢性能

`null和undefined的区别`
>null一般都是暂时没有，预期中以后会有的（可能以后也没达到预期）：在JS中NULL一般都是手动先赋值
>
>undefined：完全没在预料之内的


