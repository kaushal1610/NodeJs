function twoChar(str,index){
    if(index + 2 > str.length|| index < 0)
        return str.substring(0, 2);
          
    return str.substring(index, index + 2);
}
let result =  twoChar('java',0);
console.log(result);