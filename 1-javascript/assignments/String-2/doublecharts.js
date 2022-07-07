function doubleChar(str){
    let str1 = "";
       for (let i = 0; i < str.length; i++) {
           str1 = str1 + str.charAt(i) + str.charAt(i);
       }
       return str1;
 }
 let result =  doubleChar('hi');
 console.log(result);