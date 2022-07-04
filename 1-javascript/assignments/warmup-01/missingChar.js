function missingChar(str, n){
    return str.replace(str.charAt(n), '');
  }
  let result =   missingChar('kitten', 1);
  console.log(result);
  