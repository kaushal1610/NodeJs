function in1To10(n, outsideMode){
    if(outsideMode)
          return n <= 1 || 10 <= n;
            
      return 1 <= n && n <= 10;
  }
  let result =  in1To10(5,false);
  console.log(result);