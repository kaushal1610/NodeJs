function sumDigits(str){
    let sum = 0;
       let lim = str.length;
    let ch;
    for(let i = 0; i < lim; i++)
    {
        ch = str.charAt(i);
          if(ch >= '0' && ch <= '9')
              sum += (ch - '0');
      }
      return sum;
  }
  let result =   sumDigits('Chocolate');
  console.log(result);