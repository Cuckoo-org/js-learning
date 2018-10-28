//->递归
//->函数自己调用自己
//-> 面试题案例：1~100之间，把所有能被3并且能被5整除的获取到然后累加求和
function fn(num){
    if (num>100){
         return 0;
    }
    if(num %15 === 0){
    return num +fn(num +1);
    }
     return fn(num+1);
}
console.log(fn(1));

// 需求二：1~10之间的偶数相乘
function fn(num){
    if(num<1){
      return 1;
    }
    if(num %2 ===0){
     return num*fn(num-1);
     }
     return fn(num-1);
 }
 var result =fn(10);
 console.log(result);


 //->快速排序方法

 var ary= [12,15,14,13,16,11]
function quick(ary){
  //->如果传递进来的数组只有一项或者是空的，我们将不再继续中间项拆分
  if(ary.length<=1){
    return ary;
    }
    //->获取中间项的索引：把中间项的值获取到，在原有数组中删除中间项
    var centerIndex =Math.floor(ary.length/2),
    centerValue = ary.splice(centerIndex,1)[0];//->splice返回的是个数组，数组中包含了删除的那个内容
    //->用剩余数组中的每一项和中间项进行比较，比中间项大的放右边，比中间项小的放右边（左右两边都会是新数组）
    var aryLeft =[],
       aryRight =[];
    for (var i=0;i<ary.length;i++){
      var cur = ary[i];
      cur< centerValue?aryLeft.push(cur):aryRight.push(cur);
   }
   return quick(aryLeft).concat(centerValue,quick(aryRight));
}
console.log(quick([12,15,14,13,16,11]))