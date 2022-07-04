function notString(str){
    if (str.startsWith("not"))
     return str;
   else
     return "not " + str;
 
 }
 let result =   notString('x');
 console.log(result);