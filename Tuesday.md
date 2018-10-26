###周二

###对象数据类型object
> var obj = {name:'灰灰'，age:6};
> 每一个对象都是由零到多组`属性名（key键）:属性值（value值）`组成的，或者说有多组键值对组成的，每一组键值对中间用逗号分隔开
> 
> 属性：描述这个对象特点特征的
> 
> 对象的属性名是字符串或者数字格式的,存储的属性值可以是任何的数据类型
> 
> `对象名.属性名：忽略了属性名的单双引号`
> `对象名[属性名]：不能忽略单双引号`

```javascript
var obj = {name:'灰灰'，age:6，friend['汤姆'，'杰瑞']，0：:10};
//=>获取某个属性名对应的属性值
obj.name
obj['name']
//->如果对象名是数字如何操作
obj.0 语法不支持
obj[0] / obj['0'] 两种都支持
//->如果操作的属性名在对象中不存在，获取的结果是undefined
obj.sex->undefined


//=>设置/修改：一个对象的属性名是不能重复的（唯一性），如果之前存在就是修改属性值的操作，反之不存在就是新设置属性的操作
obj.sex = '男';
obj['age'] = 9;

//=>删除
//->假删除：让其属性值赋值为null，但是属性还在对象中
obj.sex=null;
//->真删除：把整个属性都在对象中暴力移除
delete obj.sex;
```
![Alt text](./1539660507720.png)
![Alt text](./1539660664473.png)


![Alt text](./1539660271525.png)
![Alt text](./1539660353735.png)


###基本数据类型和引用数据类型的区别
> js是运行在浏览器中的（内核引擎），浏览器会为js提供赖以生存的环境（提供给js代码执行的环境）=>`全局作用域window（后台golbal）`

```javascript
var a = 12;
b = a;//=>把A变量存储的值赋值给B
b = 13;
console.log(a);

var n = {name:'小明'};
var m = n;
m.name = '小红';
console.log(n.name);

```
`基本数据类型是按值操作的`：基本数据类型在赋值的时候，是直接的把值赋值给变量即可

`引用数据类型是按照空间地址（引用地址）来操作的`：var n = {name:'小明'};
1，先创建一个变量n
2，浏览器首先会开辟一个新的存储空间（内存空间），目的是把对象中需要存储的内容（键值对）分别的存储在这个空间中，为了方便后期找到这个空间，浏览器给空间设定一个地址（16进制的）
3，把空间的地址赋值给了变量
![Alt text](./1539670686536.png)

------
###函数数据类型
> 函数数据类型也是按照引用地址来操作的
> 
> 函数：具备一定功能的方法

```javascript
//=>创建函数：相当于生产了一台洗衣机
function 函数名(){
    //=>函数体：实现某一个功能的具体js代码
}

//=>执行函数：相当于使用洗衣机来洗衣服（如果函数只创建了但是没有去执行，函数没有任何意义）
函数名();
```

```javascript
function fn(){
console.log(1+3);
}
fn; =>输出函数本身
fn();把函数执行（把函数体中实现功能的代码执行）
```
![Alt text](./1539675675477.png)


```javascript
//=>形参：形式参数（变量），函数的入口
//当我们创建一个函数想要实现某个功能的时候，发现有一些材料并不清楚，只有当函数运行的时候，别人传递给我我才知道，此时我们就需要设定入口，让用户执行的时候通过入口把值给我们
function fn(num1，num2){
console.log(num1+num2);
}
//=>实参：函数执行传递给函数的具体指就是实参
实参就是具体值，形参是给它定的入口，一个变量
fn(1,2);
fn(10,20);
```

------
###判断操作语句
**`if,else if,else`**
```javascript
if(条件1){
   //=>条件1成立的操作
   }
else if(条件2){
    //=>上面条件不成立，条件2成立，执行的操作
} 
...
else{
   //=>以上条件都不成立执行的操作
}  

如果好几个条件都成立了，只把第一个成立的条件执行，后面成立的条件忽略不管

条件：
 A==B,A!=B,A>=B,A<B
 if(A){}先把A转换为布尔类型，判断真假以此来决定条件是否成立
 if(A>B && A<10){}只有两个小条件都是真，整体条件才为真
 if(A>B || A==0){} 只要其中一个小条件成立，整体条件就是真
 ...
```
![Alt text](./1539678281960.png)

------
**`三元运算符`**
> `条件？条件成立执行:条件不成立执行；`
> 
> if(条件){}else{}:三元运算符就是这种简单的if，else的另一种写法

```javascript
var num=10;
if(num>5 && num<=10){
num++; //=>num+1 num=num+1 自身累加1
}else{
   num--;
}
//=>改写成为三元运算符
num>5 && num<=10?num++:num--;
```


```javascript
var num=10;
if(num>5 && num<=10){
num++; 
}
//=>改写成为三元运算符:如果条件成立或者不成立的某一种情况并不需要做什么处理，我们空着语法不符合，我们使用null，undefined,void 0(就是undefined) 占位即可
num>5 && num<=10?num++:null;
```

```javascript
var num=10;
if(num>5 && num<=10){
  num++; 
 console.log(num);
}
//=>改写成为三元运算符:某一种情况执行多条操作，使用小括号包起来，中间用逗号分隔
num>5 && num<=10?
（num++，console.log(num)):null;
```

```javascript
var num=10;
if(num>5 && num<=10){
   num++; 
   break;//continue;//return;
}
//=>改写成为三元运算符:在三元运算符的操作中不能出现break;continue;return;这些关键词，我们无法用三元运算符代替if，else
 num>5 && num<=10?
（num++，console.log(num)):null;
//=>Uncaught SyntaxError(语法错误)
```
![Alt text](./1539681126067.png)

------
###switch case
> switch case应用于if,else中一个变量在不同值情况下的不同操作
```javascript
var num = 10;
switch(num){num}{//=>switch后面小括号中存放的是一个值（一般我们都写变量：把变量存储的值拿来用，有时候也可能是一个计算）
    case1：
       ...
       break;
    case 10：//=>case后面放入的都是值，目的是验证switch后面的值和哪一种case后面的值相等，相等的进行对应处理
    ...
    break; //=>每一种case结束后都要加break，结束当前判断
    default://=>switch后面的值和每一种case情况对应的值都不相等，执行最后的default,类似于else
    ...
}
```
![Alt text](./1539682698533.png)
![Alt text](./1539683189446.png)
![Alt text](./1539683709541.png)
![Alt text](./1539683866930.png)

------
###循环操作语句
> 循环：重复做一件事情

**`for循环`**
```javascript
for(设置循环起始值;设置循环执行的条件;步长累加){
  //=>循环体：重复做的事情都在循环体中
}
```
案例剖析
```javascript
//1,设置初始值
//2,验证条件
//3,条件成立，执行循环体;不成立，循环结束;
//4，步长累加
for(var i=0;i<5;i++){
   console.log(i);//=>0 1 2 3 4
}
console.log(i);//=>5
```

```javascript
var i=0
for(;i<5;){
   console.log(i);//=>没有步长累加，i永远是0，循环条件永远成立“死循环”：项目中不能出现死循环，一旦出现，循环下面的事情都做不了。
}
```

```javascript
var i=0
for(;i<5;i+=2){
   console.log(i);//=>0 2 4
}
console.log(i);//=>6
```

```javascript

for(var i=0;i<5;i+=2){
   console.log(i);
   continue;//=>结束本轮循环，继续执行下一轮：循环集中continue后面的代码都不会再执行，它会直接去执行步长，然后进行到下一轮
   ...
}
console.log(i);         
```

```javascript

for(var i=0;i<5;i+=2){
   console.log(i);
   break;//=>结束整个循环：循环体中一旦遇到break首先后面代码不执行了，而且步长累加也不执行了，循环都结束了
   ...
}
console.log(i); //=>0        
```

BAT面试题
``` javascript
for(var i=1;i<10;i+=2){
    if(i<5){
    i++;
    continue;
 }else{
    i+=3;
    break;
}
console.log(i);
}
console.log(i);//=>10
```