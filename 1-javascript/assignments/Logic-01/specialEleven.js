function specialEleven(n){
    if (n % 11 == 0 || n % 11 == 1){
     return true;
   }
   else return false;
 }
 let result =  specialEleven(22);
console.log(result);