
//var a = '12',c;

// if(!!a) {
//     c = 'ok';
// } else {
//     c = 'unok';
// }

//a % 2 ? c = 'ok' : c = "unok";

//console.log(c)
//一元操作符；
var age = 29;
++age;
alert(age);//前置递增操作符;
var age = 29;
age = age + 1;
var age = 19;
--age;
alert(age);//前置递减操作符;
var age = 18;
var anotherAge = --age+2;
alert(age);
alert(anotherAge);//前置递增和递减操作与执行语句的优先级相等;因此整个语句会从左至右被求值
var num1 = 3;
var num2 = 20;
var num3 = --num1+num2;
var num4 = num1+num2;
alert(num3);
alert(num4);//后置型递增和递减的操作符语法不变（依然为++或者--）只不过要放在变量的后面而不是前面。
//后置递增，递减，与前置递增，递减有一个非常重要的区别，就是递增和递减操作是在包含它们的语句被请求之后才执行。
// var age = 29;
// age++;
// alert(age)
var num1 =2;
var num2 =20;
var num3 =num1-- + num2;
//a--先执行表达式运算，再自减；
var num4 = num1+num2;
alert(num3);//等于22
alert(num4);//等于21
//上述例子是将前置递减改为后置递减，可以看到明显差别，差别的根源在于，这里在计算num3时使用了num1的原始值完成了加法，而num4使用了递减后的值（1）。
//在应用于对象时，先调用对象的valueof()方法，以取得一个可供操作的值。然后对该值进行操作。
var o ={
    valueof:function(){
        return -1;
    }
}
o--;//值会变成2；
        //一元加和减操作符
var num =25;
num = +num;//仍然是25
//一元操作符以一个加号（+）表示，放在数值前面，对数值不会产生任何影响。
//一元操作符主要用于表示负数，比如将25变成-25
var num = 25;
num = -num;//变成-25
//一元加减操作符，主要用于基础的算数运算；
     //位操作符
var num = -18;
alert(num.toString(2))//-10010
//要把数值-18转化成2进制字符串，得到的结果就是-10010;
   //1，按位非（NOT）按位非操作符由一个波浪线（~）表示，执行按位非的结果就是返回数值的反码。
var num1 = 25;//二进制
var num2 = ~num1;//二进制
alert(num2);//-26
//上述通过对25进行按位非操作，结果得到-26.验证了按位非操作的本质，操作数的负值减1.
   //2,按位与（AND）.按位与操作符由一个和字符号（&）表示，它有两个操作符数。
   //简而言之，按位与操作只在两个数值的对应位都是1才返回1，任何一位是0，结果都是0.
var result = 25 & 3;
alert(result);//结果为1
//因为25和3的二进制对应位上只有一位同时是1，而其他位结果自然为0，因此最终结果为1；
  
     //3，按位或（OR）按位或操作符由一个竖线符号（|）表示，也有两个操作符
  //按位或操作在有一位为1的情况下就会返回1，而只有两个位都是0的情况下才会返回0
var result = 25|3;
alert(result);//结果为27，因为这两个数值包含4个1，因此把每个1放到结果中，二进制代码11011等于十进制27
  
  //4，按位异或（XOR） 按位异或操作符由一个插入符号（^）表示，也有两个操作数
//按位异或与按位或的不同在于，这个操作在两个数值对应位上只有一个1，才会返回1，如果两个对应位都是1则会返回0
var result =25^3;
alert(result);//结果为26，这两个数值有四个1，但是第一位上都是1，则返回为0，而其他位上的1在另一个数值都没有对应的1，可以直接放到结果，
  
  //5,左移，左移用操作符两个小于号表示(<<)，这个操作符会将数值的所有位向左移动指定的位数；
var oldValue = 2;//等于二进制的10
var newValue = oldValue<< 5;//等于二进制的1000000，十进制的64
//向左移动后，原数值的右侧多出了5个空位，左侧操作会以0来填充这些空位，一边结果得到的是一个完整的32进制数
  
  //6,有符号的右移，有符号的右移操作符由两个大于号(>>)表示，这个操作符会将数值向右移动，且保留符号位（即正负号标记）
var oldValue = 64;//等于二进制的1000000
var newValue = oldValue>>5;//等于二进制的10，即十进制的2
//同样在位移过程中，原数值也会出现空位 。只不过这次空位出现在原始值的左侧，符号位的右侧。

    //7，无符号右移，操作符由三个大于号(>>>)表示，这个操作符会将数值得所有32位都向右移动。
var oldValue = 64;//等于二进制的1000000
var newValue = oldValue>>>5;//等于二进制的10，即十进制的2
//但对于负数来说，无符号右移会把二进制码当成正数的二进制码
      //布尔操作符 布尔操作符有三个：非(NOT),与(ADN),或(OR)
    //1,逻辑非(!)
alert(!"blue");//false，操作符是一个对象返回false;
alert(!0);//true;如果操作符的数值为0，则返回true;
alert(!NaN)//或者null，返回的都是true;
alert (!12345);//false,如果操作符是一个非0的值包括（Infinity），返回false
//逻辑非操作符可以用于将一个值转换为对应的布尔值
    
    //2，逻辑与(&&),有两个操作数，逻辑与操作可以应用于任何类型的操作数，而不仅仅是布尔值。
var found = false;
var result = (found && someUndefinedVariable);
alert(result);//执行为("false")警告框会弹出来，无论变量someUndefinedVariable有没有定义，也永远不会对其求值，因为第一个操作数为false，也就意味着逻辑与操作的结果为false。
    
    //3,逻辑或(||),有两个操作符
 var result = true||false;//返回为true 因为如果两个操作数都是对象 ，则返回第一个操作数。
 var found = true;
 var result = (found || someUndefinedVariable);
 alert(result);//会执行为true，和逻辑与一样变量someUndefinedVariable也没定义，由于found为true，而变量不会被求值，因此输出结果为true

   // 乘性操作符
  //乘法操作符由一个(*)表示，用于计算两个数值的乘积。
  var result  = 36*25;
  alert(result)//输出900，两个正数或者负数相乘的结果为正数，如果只有一个操作数有符号则为负数，如果乘积数值超过了ECMAscript，则返回Infinity或-Infinity。
  //如果一个操作数是NaN,则结果是NaN
  //如果是Infinity与Infinity相乘，则结果也是Infinity。
  //如果是Infinity与0相乘，则结果是NaN;
     
   //2,除法，操作符由一个斜线符号(/)表示
//例如：  var result = 66 / 11;//输出为6，与乘法操作符类似
  //如果有一个操作数NaN,则结果是NaN;
  //如果是Infinity与Infinity相除，则结果是NaN；
  //如果是零被零整除，则结果是NaN;
  //如果是非零的有限数被零除，则结果是Infinity或-Infinity;
  //如果是Infinity被任何非零数值除，则结果是Infinity或-Infinity;取决于有符号操作数的符号;
  //如果有一个操作数不是数值，则在后台调用Number()将其转化为数值，然后在应用上面的规则;

    // 3,求模，求模(余数)用(%)表示
//例如 var result = 26 % 5；求模为1;操作数为数值，就按常规的除法计算;
//如果被除数是无限大而除数是有限大的数值，则结果是NaN;
//如果被除数是有限大的数值而除数是零，则结果是NaN;
//如果是Infinity被Infinity除，则结果是NaN;
//如果被除数是零，则结果是零;
//如果被除数是有限大而除数是无限大的数值，则结果是被除数;
     
     // 加性操作符
     //  加法用(+)表示
    var result1 = 5+5;//两个数值相加
    alert(result1);//结果为10
    var result2 = 5+"5";//数值与字符串相加；
    alert(result2)//输出为"55"
    //如果有一个操作数是NaN,则结果是NaN;
    //如果是Infinity与Infinity相加，则结果是NaN;
    //如果是+0加-0，则结果是NaN;
    var num1 = 5;
    var num2 = 10;
    var message = "the sum of 5 and 10 is"+(num1+num2);
    alert(message)//"the sum of 5 and 10 is 15"
    //在这个例子中，一个圆括号把两个数值变量包括在了一起，这样会告诉解析器先计算结果，然后将结果与字符串拼接在一起。
 
     // 减法 操作符用(-)表示
     //如果是-Infinity与-Infinity相减，则结果是NaN;
     //如果是Infinity与-Infinity相减,则结果是Infinity；
     //如果是+0减-0，则结果是-0;
     //如果是-0减-0，则结果是+0;
     //如果有一个操作数是字符串，布尔值，null，或者undefined,则在后台调用Number()函数将其转换为数值，然后再执行减法计算。如果结果是NaN,则减法的结果也是NaN;
     //var result = 5-null:结果为5，因为null被转换成了0；
        
              //关系操作符
        alert("小于(<),大于(>),小于等于(<=),大于等于(>=),这几个操作符用于对两个值进行比较。")
        //比较的规则跟数学一样，这几个操作符都返回一个布尔值，
        // var result1 = 5>3,返回结果为true；
        // var result2 = 5<3,返回结果为false,
        //如果一个操作符是数值，将另一个操作数转化成数值进行比较；
        //var result = "23"<3;返回结果为false；
        //var result = "a"< 3 返回结果为false，因为a不能转化为合理的数值，因此被转化为NaN,根据规则，任何操作数与NaN关系比较，结果都是false。

          //相等操作符  
    // 1，相等于不相等 相等操作符用(==)表示，如果两个操作数相等则返回为true，而不相等则有(!=)表示；如果两个操作数不相等则返回为true；
    //这两个操作符都会先转换操作数（通常称为强制转换），然后再比较它们的相等性;
    //null和undefined是相等的，null==undefined;
    //如果有一个操作符是NaN，则相等操作符返回false，而不相等返回true;如果两个操作符都是NaN,相等操作符也会返回false，因为按照规则，NaN不等于NaN;
    //如果两个都是对象，则会比较它们是不是同一个对象；

        //全等和不全等 全等用(===)表示，
    // var result1 = ("55"==55)返回为true，因为转换后相等；
    // var result2 = ("55"===55)返回为false，因为不同的数据类型不相等：
    //null === undefined会返回false，因为它们是不同类型的值；

          //条件操作符
    //var max = (num1>num2)?num1:num2;在这个例子中，max将会保存一个最大值，这个表达式的意思是，如果num1大于num2（关系表达式返回为true），则将num的值赋给max，如果num1小于或者等于num2（关系表达式返回为false），则将num2的值赋给max；
      
         // 赋值操作符；简单的操作赋值有(=)表示，作用就是把右边的值赋给左边的变量；
    //var num = 10;
    //num += 10;赋值操作   左移赋值(<<=);有符号右移赋值(>>=);无符号右移赋值(>>>=);
     
              //逗号操作符  ，使用逗号操作符可以在一条语句中执行多行操作，
        //var num1=1,num2=2,num3=3; 逗号操作符多用于声明多个变量，逗号操作符还可以用于赋值。用于赋值时，逗号操作符总会返回表达式的最后一项，
        // var num = (5,1,5,8,0);num值为0
        








