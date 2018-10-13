var a = 1;
var b = a;
b = 2;

var c = {b:'abc'};
var d = c;
d.b = 123;

d = {x:'asdq'}

console.log(a, b, d.x,c.b);