function extraEnd(str){
    let s = str.substring(str.length-2, str.length);
    return s+s+s;
  
  }
  let result =   extraEnd('Hi');
  console.log(result);