function parrotTrouble(talking, hour){
    if (!talking)
     return false;
   else if (hour > 20 || hour < 7)
     return true;
   else
     return false;
 }
 let result =   parrotTrouble(true , 6);
 console.log(result);
 