function backAround(str){
    return  str[str.length-1]+str.slice(0,str.length-1)+str[str.length-1]+str[str.length-1] ;
   
  }let result =   backAround('a');
  console.log(result);