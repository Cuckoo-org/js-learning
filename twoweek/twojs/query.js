function queryURLparameter(url){
    //=>url我们要传递的参数（解析的地址）
    var quesIndex = url.indexOf('?'),
      obj={};
    if (quesIndex === -1){//->url中没有问号传参：直接返回空对象
        return obj;
    }
    url=url.substr(quesIndex + 1);
    var ary = url.split('&');
    for(var i=0;i<ary.length;i++){
        var curAry = ary[i].split('=');
        obj[curAry[0]]=curAry[1];
    }
    return obj;
}
console.log(queryURLparameter('http://www.baidu.com/s?=javascript&rsv_spt=1&issp=1'));

 //=>正则方法
 /*String.prototype.myQueryURLParameter = function
myQueryURLParameter(){
    var obj = {},
    reg=/([^=?&]+)=([^=?&]+)/g;
    this.replace(reg,function () {
      var arg= arguments;
      obj[arg[1]]=arg[2];  
    });
    return obj;
};
var str='http://www.baidu.com/s?=javascript&rsv_spt=1&issp=1';
console.log(str.myQueryURLParameter());   */