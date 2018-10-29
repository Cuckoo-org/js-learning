var ary = [1,2,2,3,2,5,4,1,2,3,2,2,3,3,4,6,3,2,2]
//=>ary.length-1:最后一项没有内容了，我们不需要再比较
for(var i=0;i<ary.length-1;i++){
    var cur = ary[i];//->当前遍历的这一项（索引i）

    //->把拿出的这一项和后面的每一项进行比较
    //->i+1:把当前项和它的后面项进行比较，当前索引为i，后一项的索引为i+1
    for(var j=i+1;j<ary.length;j++){
        //ary[j]:作比较的那一项
        if(cur === ary[j]){
            //->本次做比较的这一项和当前项相同，我们需要在原有数组中把作比较的这一项删除掉（作比较的这一项索引是j）
            ary.splice(j,1);
        }
    }
}
console.log(ary); //->并没有完全去重
var a = [1,15,1,2,3,5,1,13,17];

var s = a.sort(function(a,b) {return a -b})

// console.log(s);

// 去除重复项，数组去重

var newArr = [];

a.forEach(function(item, index) {
    if(a.indexOf(item) == index) {
        newArr.push(item);
    }
});
// console.log(newArr,'newArr');

var arr = [1,2,3,4, [1,2,5,6, 'aa'], [1,2]] // 展开数组
var unfoldArr = [];

arr.forEach(function(t) {
    if(typeof t == 'object') {
        unfoldArr = unfoldArr.concat(t);
    } else {
        unfoldArr.push(t);
    }
});

console.log(unfoldArr);

// 递归方法处理多维数组

var treArr = [1,2,['x',1,[0,1],2,3],'b'];
var newArr = [];

function transArr(treArr) {
    // console.log(newArr);
    if(treArr && treArr.length !== 0) {
        treArr.forEach(function(item) {
            if(typeof item === 'object') {
                transArr(item);
            } else {
                newArr.push(item); 
            }
        })
        // return newArr;
    }
};
transArr(treArr);

function transArr2() {
    var newArr = [];
    return function transArrT(arr) {
        if(arr && arr.length !== 0) {
            arr.forEach(function(item) {
                if(typeof item === 'object') {
                    transArrT(item);
                } else {
                    newArr.push(item); 
                    console.log(newArr);
                }
            })
        }
    }
}
// var transNum = transArr2();
// transNum(treArr);

// console.log(newArr, 'asdqwe');

var list = [1,0,2,23,24,25,21,3];
var len = list.length;
var tem = 0;
for(var i = 0; i<len;i++) {
    for(var x = 0;x <len-i;x++) {
        if(list[x] > list[x+1]) {
            tem = list[x];
            list[x] = list[x+1];
            list[x+1] = tem;
        }
    }
}
console.log(list);
