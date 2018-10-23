// function sum(){
//  console.log( arguments);
  
// }
// sum(10,20,'明天',{name:'明天'});
// function sum(){
//     var total = null;
//     for(var i=0;i<arguments.length;i++){
//         var cur = Number(arguments[i]);
//         !isNaN(cur)?total += cur: null;
//     }
//     console.log(total);
// }
// sum(10,20,30);
// sum();
// sum(10,20,'30')
// sum(10,20,30,'小明');

/*function sum(){
    var total = null;
    for(var i=0;i<arguments.length;i++){
        var cur = Number(arguments[i]);
        !isNaN(cur)?total += cur: null;
    }
   return total//return 后面跟着的都是值（返回的都是值，此处不是吧total变量返回，只是把total存储的值返回而已<=>return 60;
}
console.log(sum(10,20,30));
//=>sum:代表的是函数本身;
//=>sum():让函数执行，代表的是当前函数返回的结果（return 后面是什么，函数返回的就是什么）
//console.log(total);//Uncaught ReferenceError: total is not defined，闭包的保护机制导致私有作用域会保护里面的私有变量*/
// function sum(){
//     var total = 0;
//     return;
// }
// console.log(sum());//=>如果函数中没有写return或者return后面啥也没有，默认返回的结果就是undefined
// function sum(){
//     var total = 0;
//     return;
//     console.log(total);//=>在函数体遇到return后，return后面的代码都不在执行
    
// }
// console.log(sum());
//任意数求和完整版
function sum(){
    var total = null;
    for(var i=0;i<arguments.length;i++){
        var cur = Number(arguments[i]);
        !isNaN(cur)?total += cur: null;
    }
   return total;
}
var total = sum(10,20,30);//=>外面是全局下的total和函数中的total没有必然的联系
console.log(total.toFixed(2));