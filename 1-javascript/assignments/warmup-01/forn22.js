function front22(str){
    return str.substring(0,2)+ str.slice(0,str.length) +str.substring(0,2);
  }
  let result =   front22('abc');
  console.log(result);