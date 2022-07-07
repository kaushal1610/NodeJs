function cigarParty(cigars, isWeekend){
    if(isWeekend)
       return 40 <= cigars;
         
   return 40 <= cigars && cigars <= 60;
}
let result =   cigarParty(30,false);
console.log(result);