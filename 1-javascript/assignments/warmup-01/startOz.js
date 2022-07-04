function startOz(str){
 
    if ( str == 1)
  
    str = str.substring(0,1);
  
    else if (str== 0)
  
    str = "";
  
  else if ( !(str.charAt(0) == 'o') && !(str.charAt(1) ==
  
    'z') )
  
     str = "";
  
     else if ( str.charAt(0) == 'o' && str.charAt(1) != 'z')
  
     str = str.substring(0,1);
  
     else if (str.charAt(1) == 'z' && str.charAt(0) != 'o')
  
     str = str.substring(1,2);
  
     else if ( str.charAt(0) =='o' && str.charAt(1) == 'z')
  
     str = str.substring(0,2);
  
     return str;
  
  }
  let result =   startOz('oxx');
console.log(result);