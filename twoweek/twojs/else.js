// for (var i =0 ;i<=100;++i){
//     console.log(i)
// }
//break和continue语句
var num=0;
for(var i=1;i<10;i++){
    if(i%5==0){
        break;
    }
    num++;
}
alert(num);//=>4
var num=0;
for(var i=1;i<10;i++){
    if (i%5 == 0){
        continue;
    }
    num++;
}
alert(num)//=>8
//switch语句
switch(i){
    case 25:
    //合并两种情形
    case 35:
    alert("25or35")
    break;
    case 45:
    alert("45");
    break;
    default:
    alert("other");
}
