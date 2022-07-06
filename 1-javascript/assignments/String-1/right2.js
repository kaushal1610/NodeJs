function right2(str){
    return str.substring(str.length-2, str.length) + str.substring(0, 
      str.length-2);
  
  }
  let result =   right2(13,13);
  console.log(result);