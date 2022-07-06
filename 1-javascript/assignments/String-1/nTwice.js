function nTwice(str, n){
    return str.substring(0,n) + str.substring(str.length-n, str.length);
 }
 let result =   nTwice('hello',2);
 console.log(result);