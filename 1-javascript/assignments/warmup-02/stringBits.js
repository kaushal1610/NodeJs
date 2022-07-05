function stringBits(str){
    let len = str.length;
    let j = "";
    for (let i = 0; i < len; i = i + 2) {
      j += str.charAt(i);
  
    }
  
    return j;
  
  }
  let result =   stringBits('Hi');
  console.log(result);