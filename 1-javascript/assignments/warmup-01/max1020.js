function max1020(a, b){
    if (((a >= 10) & (a <= 20)) & !((b >= 10) & (b <= 20))) {
    return a;
  } else if (!((a >= 10) & (a <= 20)) & ((b >= 10) & (b <= 20))) {
    return b;
  } else if (((a >= 10) & (a <= 20)) & ((b >= 10) & (b <= 20))) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
  } else {
    return 0;
  }
  }
  let result =   max1020(11,19);
  console.log(result);