###对象数据类型的作用
/ /-> 把描述同一个事物（同一个对象）的属性和方法放在一个内存空间下，起到了分组的作用；
这样不同事物之间的属性即使属性名相同，相互也不会发生冲突
1、我们把这种分组编写代码的模式叫做"单例模式"
2、在单例模式中我们把person1或者person2也叫作"命名空间"

```javascript
var person1 = {
   name:'李翠莲'，
   age:18
};
var person2 = {
   name:'陈二狗'，
   age:45
};
person1.age
person2.name
```
//  单例模式是一种项目开发中经常使用的模式，因为项目中我们可以使用单例模式来进行我们的“模块化开法”
> 模块化开发：对于一个相对于来说比较大的项目，需要多人协同开发的，我们一般情况下会根据当前项目的需求划分成几个功能板块，每个人负责一部分，同时开发，最后把每个人的代码进行合并

------

###工厂模式

```javascript
var jsperson1 = {
    name:'刘二猪',
    age:20,
    writeJs:function(){
      console.log('my name is'+this.name+',I can do it');
   }
}
isperson1.writeJs()
......
```
> 单例模式虽然解决了分组的作用，但是不能批量生产，属于手工作业模式 -> "工厂模式"
> 把实现同一件事情的相同代码放到一个函数中，以后如果再想实现这个功能，不需要重新编写这些代码了，只需要执行当前的函数即可--> "函数的封装"-->"低耦合高内聚"：减少页面中的冗余代码，提高代码的重复利用率
```javascript
function createJsPerson(name,age){
     var obj = {};
     obj.name = name;
     obj.age = age;
     obj,writeJs = function(){
       console.log("my name is" + this name +"i can do it");
     };
     return obj;
}
var p1 = createJsPerson('王花花'，20);
var p2 = createJsPerson('李丹丹'，18)
```
JS是一门轻量级的脚本“编程语言”(HTML+CSS不属于编程语言，属于标记语言)
所有的编程语言都是面向对象开发的 ——>类的继承、封装、多态
继承：子类继承父类中的属性和方法
多态：当前方法的多种动态--后台语言中：多态包含重载和重写
JS中不存在重载，方法名一样的话，后面的会把前面的覆盖掉，最后只保留一个
”JS中有一个操作类似重载但是不是重载“：我们可以根据传递参数的不一样的，实现不同的功能
```javascript
function sum(num){
   if(typeof num === "undefined" ){
      return 0;
     }
     return num;
 }
 sum(100);
 sum()
```
重写：子类重写父类的方法