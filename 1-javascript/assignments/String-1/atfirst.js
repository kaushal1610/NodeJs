function atFirst(str){
    if (str.length >= 2)
      return str.substring(0,2);
    else if (str.length == 1)
      return str + "@";
    else
      return "@@";
  
  }
  let result =  atFirst('java');
  console.log(result);