var newsBox = document.getElementById('newsList');
var newsList = newsBox.getElementsByTagName('li');
//console.dir(newsList)

/*for(var i=0;i<newsList.length;i++) {
    if(i%2===1){
        newsList[i].style.backgroundColor='#EEE';
       }    
}   if操作
    /*
    * i=0 第一次循环 第一个li newsList[0]
    * I=1 第二次循环 第二个li newsList[1]
    * ...
    * newsList[i] 当前这一轮循环 我们获取到想要操作的那一个li  */
   /*第一个Li（奇数行） 索引0（偶数）
    *第二个Li（偶数行） 索引1（奇数）
    *如果当前li的索引是偶数，代表奇数行；如果索引是奇数，代表偶数行*/
  
    //三元运算符方法
   /* for(var i=0;i<newsList.length;i++) {
       {
        i % 2===1? newsList[i].style.backgroundColor='#EEE' :null       
        } 
          
       }*/

       //switch case 方法
     /*for(var i=0;i<newsList.length;i++)
    {
    switch(i%2){
        case 1:newsList[i].style.backgroundColor='#EEE';break 
    }       
         } */

   // 奇偶行变色
   /*for( var i=0;i<newsList.length;i++){
       i % 2===0?newsList[i].style.backgroundColor='pink':newsList[i].style.backgroundColor='orange'
   }*/

   //隔三行变色
//    for( var i=0;i<newsList.length;i++){
//        var n = i%3,curli = newsList[i];
//      if (n===0) {curli.style.backgroundColor='pink'
//        }else if(n===1){curli.style.backgroundColor='yellow'
//        }else{curli.style.backgroundColor='orange'
//        }
//    }

 // switch case 实现三行变色
//  for( var i=0;i<newsList.length;i++){
//     var n = i%3,curli = newsList[i];
//      switch (n) {
//          case 0:curli.style.backgroundColor='red' 
//              break;
//              case 1:curli.style.backgroundColor='yellow'
//              break;     
//          default:curli.style.backgroundColor='blue'
             
//      }
//  }

    // class name 操作方式
// for (var i= 0;i<newsList.length;i++){
//     switch (i%3){
//         case 0:newsList.classname='c1';
//         break;
//         case 1:newsList.classname='c2';
//         break;
//         case 2:newsList.classname='c3';
//         break;
//     }
// }

   //更为简便
   for (var i= 0;i<newsList.length;i++){
        curli = newsList[i];
        //   余数   样式
        //   0      c1
        //   1      c2
        //   2      c3
        //   n      c(n+1)
    curli(i).className='c'+(i%3+1);
     }