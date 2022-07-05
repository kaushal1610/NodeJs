function stringSplosion(str){
    let len = str.length;
    let number = "";
    for (let i = 0; i < len + 1; i++)
      number += str.substring(0,i);
    return number;
  
  }
  let result =   stringSplosion("code" , 2);
console.log(result);
