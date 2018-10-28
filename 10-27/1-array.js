// var ary = [1,2,2,3,2,5,4,1,2,3,2,2,3,3,4,6,3,2,2]
// for(var i=0;i<ary.length-1;i++){
//     var cur = ary[i];
//     for(var j=i+1;j<ary.length;){
//         // if(cur === ary[j]){
//         //     ary.splice(j,1);//->数组塌陷问题，我们使用splice删除数组中的某一项后，
//         //    // 删除这一项后面的每一项索引都要向前一位（在原有索引上减1），
//         //    // 此时如果我们j++循环操作的值累加了我们通过最新j获取到的元素不是紧挨这一项的元素，而是跳过这一项的元素
//         //   // j--;//->先让j--，然后再j++，相当于没加没减，此时还是原有索引，再获取的时候就是删除后面的这一项紧挨着的这一项
//         // }else{
//         //     j++;
//         // }
//         cur === ary[j]? ary.splice(j,1) : j++
//     }
// }
// console.log(ary); 
function fn(num){
    console.log(num);
    if(num === 0){
      return;
    }
    fn(num - 1);
 }
 fn(10);