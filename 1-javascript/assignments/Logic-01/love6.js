function love6(a, b){
    if(a == 6 || b == 6 || a + b == 6 || Math.abs(a - b) == 6)
       return true;
         
   return false;
}
let result =  love6(1,5);
console.log(result);