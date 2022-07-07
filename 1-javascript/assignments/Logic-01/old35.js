function old35(n){
    return n%3 == 0 && n%5 == 0 ? false : n%3 == 0 || n%5 == 0;
 }
 let result =  old35(3);
 console.log(result);