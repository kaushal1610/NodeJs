function lastTwo(str){
    if (str.length < 2)
      return str;
    else
      return str.substring(0, str.length-2) + str.charAt(str.length-1) + str.charAt(str.length-2);
  }
  let result =  lastTwo('ab');
  console.log(result);