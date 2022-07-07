function squirrelPlay(temp, isSummer){
    let max = 90; 
   if (isSummer) max=100;
   return ( temp >= 60 && temp <= max);
 }
 let result =  dateFashion(70,false);
 console.log(result);