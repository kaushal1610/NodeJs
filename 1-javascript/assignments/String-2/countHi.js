function countHi(str){
    let count =0;
    for (let i = 0; i < str.length ; i++) {
      if (str.substring(i,i+2) == 'hi')
        count++; 
    }
    return count;
  }