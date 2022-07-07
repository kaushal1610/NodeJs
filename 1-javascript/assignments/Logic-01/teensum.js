function teenSum(a, b){
    if(((a >= 13) && (a <= 19)) || ((b >= 13) && (b <= 19)))
       return 19;
    else 
       return (a + b);
 }
 let result =  teenSum(3,4);
 console.log(result);