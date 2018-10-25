function sayHi(name,message){
    alert('hello'+name+'、'+message)
}
sayHi('nicela','how are you today?')

function doAdd(){
    if(arguments.length==1){
        alert(arguments[0]+10);
    }else if(arguments.length==2){
        alert(arguments[0]+arguments[1]);
    }
}
doAdd(10);
doAdd(20,20);