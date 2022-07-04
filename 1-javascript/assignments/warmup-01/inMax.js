function intMax(a, b, c){
    if (a > b & a > c) {
     return a;
  } else if (b > a & b > c) {
    return b;
  } else {
    return c;
  }
  }
  let result =   intMax(1,2,3);
  console.log(result);