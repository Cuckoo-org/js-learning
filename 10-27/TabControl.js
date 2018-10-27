var tabBox= document.getElementById('tabBox'),
oList = tabBox.getElementsByTagName('li'),
oDivList = tabBox.getElementsByTagName('div');
function change(index){
    for (var i = 0;i<oList.length;i++){
      oList[i].className='';
      oDivList[i].className='';
    }
 
    oList[index].className='select';
    oDivList[index].className='select';
  }
  for(let i =0;i<oList.length;i++){
    oList[i].onclick=function(){
      change(i);
    }
  }