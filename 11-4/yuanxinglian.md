###原型链模式基础
```javascript
 function CreateJsPerson(name,age){
     this.name = name;
     this.age = age;
     CreateJsPerson.prototype.writeJs = function(){
      console.log("my name is"+this.name+"i can")
    }
}
var p1 = new CreateJsPerson("陈二狗",16)
var p2 = new CreateJsPerson("李铁柱",14)
console.log(p1.writeJs === p2.writeJs)//->true
//构造函数模式中拥有了类和实例的概念，并且实例和实例之间是相互独立开的-> 实例识别
//基于构造函数模式的原型模式解决了 方法或者属性公有的问题->把实例之间相同的属性和方法提取成公有的属性和方法->想让谁公有就把它放在CreateJsPerson.prototype上即可
```

------
> 1、每一个函数数据类型（普通函数 、类）都有一个天生自带的属性：prototype(原型)，并且这个属性是一个对象数据类型的值
> 2、并且在prototype上浏览器天生给它加了一个属性constructor(构造函数)，属性值是当前函数（类）本身
> 3、每一个对象数据类型（普通对象、实例、prototype...)也天生带一个属性：____proto____,属性值是当前实例所属类的原型（prototype）
```javascript
            function  CreateJsPerson(name,age) {
                this.name = name;
                this.age = age;  
            }
            CreateJsPerson.prototype.writeJs = function () {
                    console.log("ny name is" + this.name + ",i can write js");
                };
            var p1 = new CreateJsPerson("lala",18);
            var p2 = new CreateJsPerson("dd",19);
            console.log(p1.writeJs===p2.writeJs);//->true
            //构造函数模式中拥有了类和实例的概念，并且实例和实例之间是相互独立开的->实例识别
            //基于构造函数模式的原型模式解决了方法或者属性公有的问题->把实例之间相同的属性和方法提取成公有的属性和方法
            //想让谁公有就把他放在CreateJsPerson.prototype上即可


            //1.每一个函数数据类型(普通函数，类)都有一个天生自带的属性：prototype(原型),并且这个属性是一个对象数据类型的值
            //2.并且在prototype上浏览器天生给他加了一个属性constructor(构造函数),属性值是当前函数(类)本身
            //3.每一个对象数据类型(普通的对象，实例，prototype...)也天生自带一个属性：__proto__,这个属性属性值是当前实例所属类的原型(prototype)
            function Fn() {
                this.x = 100;
                this.sum = function(){};
            }
            Fn.prototype.getX = function () {
                console.log(this.x);   
            };
            Fn.prototype.sum = function () {
                };
            var f1 = new Fn;
            var f2 = new Fn;
            console.log(Fn.prototype.constructor === Fn);//->true
            //Object是js中所有对象数据类型的基类(最顶层的类)
            //1.f1 instanceof Object->true 因为f1通过__photo__可以向上级查找，不管有多少级，最后都能找到Object
            //2.在Object.prototype上没有__photo__这个属性

            //3.原型链模式

            f1.hasOwnProperty("x");//->x是f1的一个属性
            //但是我们发现在f1的私有属性上并没有这个方法，那我们是如何处理的
            //通过 对象名.属性名 的方式获取属性值的时候，首先在对象私有的属性上进行查找，如果私有中存在这个属性，则
            //获取的是私有的属性值，如果私有没有，则通过__photo__找到所属类的原型(累的原型上定义的属性和方法都是当前
            //实例公有的属性和方法)，原型上存在的话，获取的是公有的属性值；如果原型上也没有，则继续通过原型上的__photo__
            //继续向上查找，一直找到Object.prototype为止....
            //这种查找机制，就是我们的原型链模式
            // f1.getX===f2.getX ->true
            // f1.__photo__.getX===f2.getX ->true
            // f1.getX===Fn.prototype.getX->true
            // f1.sum===f2.__proto__.sum->false
            // f1.sum===Fn.prototype.sum->false
            // f1.hasOwnProperty->f1.__proto__.__proto__.hasOwnProperty
            //在IE浏览器中，我们原型模式也是同样的原理，但是IE浏览器怕你通过__proto__把公有的修改，禁止我们使用__proto__;
            f1.sum = function () {
                //修改自己私有的sum
            };
            f1.__proto__.sum = function () {
                //修改所属类原型上的sum
            };
            Fn.prototype.sum = function () {
                //修改公有的sum
            };
```

-------
**this和原型扩展**
> 在原型模式中，this常用的有两种情况；
> 在类中this.xxx=xxx;this->当前类的实例
> 某一个方法中的this->看执行的时候" . "前面是谁this就是谁
> 1、需要先确定this的指向（this是谁）
> 2、把this替换成对应的代码
> 3、按照原型链查找的机制，一步步的查找结果
```javascript
function Fn(){
   this.x = 100;
   this.y = 200;
   this.getY = function(){
      console.log(this.y);
    }
}
Fn.prototype = {
   consteuctor:Fn,
   y:300,
   getX:function(){
    console.log(this.x);
    },
    getY:function(){
     console.log(this.y);
     }
};
var f = new Fn;
f.getX();//-> console.log(f.x)->100;
f._proto_.getX();//-> this是f._proto_ ->console.log(f._proto_.x) ->undefined
Fn.prototype.getX();//->undefined
f.getY();//->200
f._proto_.getY();//->300

Array.prototype.myUnique = function(){
    //this->
}
var ary = [];
ary.myUnique();
Array.prototype.myUnique();
```
```javascript
var ary = [12,23,53,22,23,14,12,13,23,12];
//->链式写法:执行完成数组的一个方法可以紧接着执行下一个方法
原理：
ary为什么可以使用sort方法？->因为sort是Array.prototype上的公有的方法，而数组ary是Array这个类的一个实例，所以ary可以使用sort方法 ->数组才能使用我们Array原型上定义的属性和方法
  sort执行完成后的返回值是一个排序后的"数组"，可以继续执行reverse
  reverse执行完成的返回值是一个数组，可以继续执行pop
  pop执行完成的返回值是被删除的那个元素，不是一个数组了，所以在执行push报错
ary.sort(function(a,b){
    return a-b;
}).reverse().pop()//.push('冰冰');
 ary
```
------
在内置类的原型上扩展方法
```javascript
         var obj = {};
         for(var i = 0;i<this.length;i++)
         var cur  = this[i];
         if(obj[cur]===cur){
          this[i] = this[this.length-1];
          this.length--;
          i--;
          continue;
     }
     obj[cur] = cur;
}
obj = null;
return.this;//this目的及时为了完成链式写法
var ary = [12,23,53,22,23,14,12,13,23,12];
ary.myUnique().sort(function(a,b){
  return a-b;
  })
  console.log(ary);
```
