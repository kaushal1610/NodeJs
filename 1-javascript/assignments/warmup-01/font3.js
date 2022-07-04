function front3(str){
    if (str.length <= 3)
      return str+str+str;
    else {
     let n = str.substring(0,3);
      return n+n+n;
    }  
  }
  let result =   front3('front3');
  console.log(result);