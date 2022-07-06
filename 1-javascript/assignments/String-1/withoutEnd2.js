function withoutEnd2(str){
    let len = str.length;
    return str.slice(1,len - 1);
  }
  let result =   withoutEnd2('ab');
  console.log(result);