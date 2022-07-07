function sortaSum(a, b){
    let sum = a+b;
   
   if(sum >= 10 && sum <= 19)
     return 20;
   else
     return sum;
 }
 let result =  sortaSum(7,4);
 console.log(result);