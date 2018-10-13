var a = 0 ,c;

c =  1 + a++;

console.log(a, c);

// ++a 自己先运算，自加，加计算其他
// a++ 先执行表达式运算，再自加
a = {};
c = {};

console.log(a === c);
console.log(a == c);