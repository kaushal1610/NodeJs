function deFront(str){
    let a = "";
    for (let i = 0; i < str.length; i++) {
  
      if (i == 0 && str.charAt(i) == 'a')
        a += 'a';
      else if (i == 1 && str.charAt(i) == 'b')
        a += 'b';
      else if (i > 1)
        a += str.charAt(i);
    }
      return a;
  
  }
  let result =  deFront('Hello');
  console.log(result);
