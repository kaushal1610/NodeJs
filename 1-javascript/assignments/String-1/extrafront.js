function extraFront(str){
    if(str.length >= 2)
         str = str.substring(0, 2);
           
     return str + str + str;
 }
 let result =  extraFront('Hello');
 console.log(result);