function mirrorEnds(string){
    let len = string.length;
      let a = len - 1;
      for(let i = 0; i < len; i++, a--)
      {
          if(string.charAt(i) != string.charAt(a))
              return string.substring(0, i);
      }
      return string;
  }
  let result =   mirrorEnds('abca');
  console.log(result);