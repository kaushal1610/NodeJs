function minCat(a, b){
    let min = Math.min(a.length, b.length);
     return a.substring(a.length - min) + b.substring(b.length - min)
 }
 let result =  minCat('Hello','hii');
 console.log(result);