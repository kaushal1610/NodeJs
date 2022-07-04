function icyHot(temp1, temp2){
    if(temp1<1 && temp2>100)
      return true;
    else if (temp1>100 && temp2<1)
      return true;
    else 
      return false;
  }
  let result =   icyHot('front3');
  console.log(result);