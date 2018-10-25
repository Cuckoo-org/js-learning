###字符串中常用的方法
> 在JS中用单（双）引号包裹起来的都是字符串
```javascript
var str = 'welcome to mingtian ,good good study,day day up!';      
//=>字符串就是由零到多个字符组成的
//1、
第一个字符索引0
第二个字符索引1
//...
//以数字作为索引，从零开始的
//2、
//有一个叫做length的属性，存储的是当前字符串中字符的个数（字符串的长度）
str[0] ->'w'
str。length ->46
str[str.length-1] ->'!'最后一个字符
str[100] ->undefined 如果指定的索引不存在获取的结果是undefined
```
> 真实项目中，我们经常操作字符串，此时我们需要掌握常用的一些字符串操作方法
> `console.dir(String.prototype)`
> ![Alt text](./1540431748773.png)

`charAt && charCodeAt`
> str.charAt(索引): 返回指定索引位置的字符，和str[索引]的区别在于，当指定的索引不存在时，中括号的方式获取的是undefined，而charAt获取的是空字符串
> 
> str.charCodeAt(索引)：在charAt基础上，把获取的字符变为Unicode编码值（对应ASC||码表）
> 48~57:对应的是数字0~9
> 65~90：A~Z
> 97~122:a~z
> ...
> 
> String.fromCharCode(十进制的Unicode值)：把值按照ASC||码表中的信息，转换为原有的字符，和charCodeAt正好对应
![Alt text](./1540433285915.png)

`substr && substring && slice`
> 实现字符串截取的三个方法
> str.substr(n,m)：从索引n开始，截取m个字符
> str.substring(n,m):从索引n开始，截取到索引为m处（不包含m）把找到的部分截取
> str.slice(n,m):和substring语法一样，区别在于slice支持以负数做索引 
![Alt text](./1540437263851.png)

> 当索引是负数的时候，浏览器在处理的时候，是用字符串的总长度加上负数索引，然后按照正数处理操作
> 
> 细节：
> 1、如果只传递了n（str.substr(n)),相当于从索引n开始一直截取到字符串的末尾
> 2、如果传递的索引超出最大限制，也是把能截取的部分截取掉即可
> 3、如果一个参数都不传递：相当于把整个字符串都截取（字符串的克隆）
> ...
> ![Alt text](./1540437728683.png)


`toUpperCase && toLowerCase`
> toUpperCase:把字母全部大写
> toLowerCase：把字母全部小写
![Alt text](./1540439137710.png)

`indexOf && lastIndexOf`
>  str.indexOf:获取当前字符在字符串中第一次出现位置的索引
>  str.lastIndexOf:获取的是最后一次出现位置的索引
![Alt text](./1540439422226.png)

> 如果当前字符在字符串中没有出现过，结果是-1：我们根据这个规律可以验证一下当前字符串中是否包含某个字符
```javascript
if(str.indexOf('?')===-1){
   //=>没有出现过
}
if(str.indexOf('?')>=0){
     //=>出现过
}
```

`split`
> str.split:按照某一个字符把字符串拆分成数组中的某一项，和数组中的join方法是对应的
![Alt text](./1540440128191.png)
![Alt text](./1540440237401.png)
![Alt text](./1540440349701.png)


`replace`
> str.replace:实现字符的替换
> 执行一次replace只能替换一个，如果有好几个都需要替换，在不使用正则的情况下我们需要执行很多次replace
![Alt text](./1540440818885.png)

> 有些需求即使执行很多次replace也实现不了，此时需要使用正则处理，真实项目中replace一般都是和正则搭配使用的
![Alt text](./1540440968978.png)

`trim && trimLeft && trimRight`
> str.trimLeft: 去除字符串开始的空格
> str.trimRight: 去除字符串结尾的空格
> str.trim: 去除字符串首尾空格
 ![Alt text](./1540441439063.png)

###案例：queryURLParameter
> 获取地址栏中URL地址问号传递的参数值 
