//正常排序
// var ary = [12,13,23,14,16,11];
// ary.sort(function(a,b){
//     return(a-b);
// })
// console.log(ary)

//冒泡排序
//=>原理：让数组中的当前项和后一项进行比较，如果当前项大于后一项，我们让两者交换位置（小到大的排序）
//->不会一轮就比较完成，会一轮一轮进行比较，虽然不会实现完整的效果，但是会把当前最大的放在末尾
//->具体比较的轮数：ary.length-1,数组有多长我们需要把总长度减1个数分别放在末尾，即可实现最后的排序
/*
 *bubble:实现冒泡排序
 *@parameter
 *ary:[array]:需要实现排序的数组
 *@return
 *[array]排序后的数组（升序）
 *by team on 2018/10/28
*/
function bubble(ary){
    //->外层循环控制的是比较的轮数
  for(var i=0;i<ary.length-1;i++){
      //->里层循环控制每一轮比较的次数
      for(var j=0;j<ary.length-1-i;j++){
    //->ary[j]:当前本次拿出来的这一项
    //->ary[j+1]:当前项的后一项
    if(ary[j]>ary[j+1]){
        //->当前这一项比后一项还要大，我们让两者交换位置
        var temp=ary[j];
        ary[j]=ary[j+1];
        ary[j+1]=temp;
    }
      }

  }
  return ary;
}
var ary = [12,13,23,14,16,11];
console.log(bubble(ary));