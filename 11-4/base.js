function User(name,age,gender){
    this.name = name;
    this.age= age;
    this.gender = gender
}
var whh = new User('王花花',18,'male')
console.log(whh)//->构造器，构造函数

function Food(){
    this.kind = '3个';
    this.name = '好吃的';
    this.gender = '都行';
}
var food = new Food();
console.log(food);

function Dog(){
    this.name = '小龙';
    this.age = 2;
    this.jiao = function(){
        console.log('汪汪汪')
    }
}
var dog = new Dog();
dog.jiao();
console.log(dog);

function User(name,age){
    this.name = name;
    this.age = age;
   
    }
 User.prototype.greet = function(){
    console.log('你好我是'+this.name+"我今年"+this.age+"岁了")
}
var sds = new User("孙大圣",15);
var lsd = new User("李栓蛋",15);
var zks = new User("赵可爽",15);
User.prototype.greet= function(){
    console.log('你好 我是玉皇大帝')
}

//->最干净的创建对象的方式
// var a = Object.create(null);
// console.log(a);
var a = Object.create({
    a:8,
    b:2
}
);
console.log(a);
<script>

document.write("可用宽度：" + screen.availWidth);

</script>