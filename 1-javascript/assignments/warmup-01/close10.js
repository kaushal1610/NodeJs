function close10(a, b){
    let distA = Math.abs(a - 10);
     let distB = Math.abs(b - 10);
       
     if(distA == distB)
         return 0;
                 
     return distA < distB ? a : b;
 }
 let result =   close10(13,7);
 console.log(result);