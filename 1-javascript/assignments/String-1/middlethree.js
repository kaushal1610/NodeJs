function middleThree(str){
    let mid = str.length/ 2;
     return str.substring(mid - 1, mid + 2);
 }
 let result =  middleThree('java');
console.log(result);