//=>获取当前元素的上一个哥哥节点元素（兼容所有浏览器）
//->curEle:current element
/*首先获取当前元素的上一个哥哥节点，判断当前获取的节点是否为元素节点（nodeType===1),如果不是，
基于当前获取的节点，找到他的上一个哥哥节点。。。一直找到哥哥节点为止
如果在查找过程中，发现没有上一个哥哥节点，则不再继续查找
*/
function prev(curEle){
    var p=curEle.previousSibling;
    while(p && p.nodeType !== 1){//->p:p!==null
     p=p.previousSibling;
    }
  return p;  
}

// while(条件){
//    //->循环体
// }