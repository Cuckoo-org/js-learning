###数据类型转换
`把其他数据类型转换成number类型`
> isNaN, Number, parseint, parseFloat
>  在进行加减乘除数学运算的时候

```javascript
true ->1   false ->0
'' ->0 '12' ->12 '12px' ->NaN/12 '珠峰' ->NaN
null ->0
undefined ->NaN
 
 {} /^$/ function(){} ->NaN
 []->''->0
 [12]->'12'->12
 [12,23]->'12,23'->NaN
 //=>引用数据类型转换为数字
 //通过tostring方法把数组转化为字符串，然后再调用number把字符串转换为数字
```

`JS中的数学运算`
> +,-,*,/ 加减乘除
> 除了加法有特殊性，其余的运算符都是数学运算，也就是遇到非数字类型，需要把其转换为number再进行运算
> 
> 加法的特殊性：
> 在遇到字符串的时候，+不是数学运算，而是字符串拼接，只要不遇到字符串就是数学运算
```javascript
1-'1' ->0
10*null ->0
10/undefined ->NaN

1+'1' ->'11'
null+'1' ->'null1'
//=>字符串拼接：是把其它的值转换为字符串然后再拼接（tostring）
//=>其它数据类型的tostring是直接的把值用单（双）引号包起来即可，只有对象的有特殊性，对象.tostring()==='[object object]' 

1+null+true+undefined+[]+'珠峰'+null+undefined+[]+10
/*
 * 1+null->1
 * 1+true->2
 * 2+undefined->NaN
 * NaN+[]->'NaN'
 * 'NaN'+'珠峰'->'NaN珠峰'
 * ...
 * 'NaN珠峰nullundefined10'
 * /
 
```

`将其它数据类型转换为布尔类型`
> Boolean,!,!!
> 在条件判断的时候，也是转换为布尔类型，然后验证条件的真假
> 
> 只有`0，NaN,空字符串,null,undefined`五个转换为false，其余都转换为true

```javascript
[]->true
-1->true

if (box){
   //=>首先把box变量存储的值获取到，转换为布尔类型，如果为true条件成立，反之不成立
} 
if(3+'3px'){
   //=>条件成立
}
if(3-'3px'){
   //=>条件不成立：3-'3px'=NaN
}
```

`在使用==进行比较的时候`
> 在使用==进行比较的时候，如果左右两边数据类型不相同，浏览器会默认转换为相同的类型，然后再比较(`===`不会这样操作)

```javascript
//=>对象和对象：比较的是空间地址，不是相同的空间，结果肯定是false
[]==[] ->false
var a={};
var b=a;
a==b ->true

//=>对象和数字：把对象转换为数字
[]==0 ->true
({})==NaN ->false NaN和自己不相等和其它任何值都不相等

//=>对象和字符串：把两边都转换为数字比较的
[]==''-> true


//=>对象和布尔：把两边都转换数字
[]==true -> 0==1->false

[]==false ->0==0 ->true
![]==false -> ！[]把数组变为布尔再取反=false ->false==false ->true 

//=>字符串和数字：字符串转换为数字
//=>字符串和布尔：都转换为数字
//=>布尔和数字：布尔转换为数字

//=>规律：两个等于号比较，左右两边数据值的类型不一样，浏览器会把两边的类型都转换为数字然后再比较，但是null和undefined除外
null==undefined->true
null===undefined->false
null==0 ->false null以及undefined和其它任何值都不相等 

```
------

###Math中常用的方法
> 数学函数：但是它是对象数据类型的`typeof Math ->'object'`
> Math对象中给我们提供了很多常用的操作数字的方法
> `console.dir(Math)`查看所有方法
 ![Alt text](./1540194617221.png)
 ![Alt text](./1540194666212.png)



`abs`
> Math.abs:取绝对值
```javascript
Math.abs(12) ->12
Math.abs(-12) ->12
```

`ceil/floor`
> Math.ceil:向上取整
> Math.floor:向下取整
```javascript
Math.ceil(12) ->12
Math.ceil(12.1) ->13
Math.ceil(12.9) ->13
Math.ceil(-12.1) ->-12
Math.ceil(-12.9) ->-12

Math.floor(12) ->12
Math.floor(12.1) ->12
Math.floor(12.9) ->12
Math.floor(-12.1) ->-13
Math.floor(-12.9) ->-13
```

`round`
> Math.round:四舍五入
```javascript
Math.round(12.3) ->12
Math.round(12.5) ->13 正数中5包含在向上
Math.round(-12.3) ->-12
Math.round(-12.5) ->-12负数中5包含在向下
Math.round(-12.51) ->-13

```

`random`
> Math.random:获取[0,1]之间的随机小数
```javascript
for(var a =0;a<100;a++){
  console.log(Math.random());
}
//=>需求：获取[0,10]之间的随机整数
Math.round(Math.random()*10)

//=>需求：获取[3，15]之间的随机整数
Math.round(Matn.random()*12+3)

>获取[n,m]之间的随机整数
> `Math.round(Math.random()*(m-n)*n)`
```
![Alt t`ext](./1540195732724.png)

`max/min`
> Math.max:获取一组值中的最大值
> Math.min:获取一组值中的最小值
```javascript
Math.max(12,13,14,15,16,17,25,156)->156
Math.min(12,15,16,17,19,62,18,196)->12
```
`PI`
> Math.PI:获取圆周率(π)
```javascript
Math.PI ->3.141592653589793
```
`pow/sqrt`
> Math.pow:获取一个值的多少次幂
> Math.sqrt:开平方
```javascript
Math.pow(10,2) ->100
Math.sqrt(100) ->10
```