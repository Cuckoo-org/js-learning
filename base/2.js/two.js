var a = 12;
b = a;
b = 13;
console.log(a)
//基本数据类型和引用数据类型的区别
var n = {name:'小明'};
var m = n;
m.name = '小红';
console.log(n.name)

for (var a=1;a<10;a+=2){
    if (a<5){
        a++;
        continue;
    }
    else{
        a+=3;
        break;
    }
    console.log(i);
} 
//console.log(i)=>10  for循环试题。