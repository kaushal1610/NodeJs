function endOther(a, b){
    let a1=a.toLowerCase();
    let b1=b.toLowerCase();
    if(a.length<b.length)
      return b.toLowerCase().substring(b.length-a.length)==a1;
    else 
      return a.toLowerCase().substring(a.length-b.length)==b1;
    
  }
  let result =  endOther('Hiabc','abc');
  console.log(result);