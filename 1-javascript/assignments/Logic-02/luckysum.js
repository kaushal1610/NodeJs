function luckySum(a, b, c){
    let sum = 0;
         if (a != 13) {
             sum += a;
         }
         if (a != 13 && b != 13) {
             sum += b;
         }
         if (a != 13 && b != 13 && c != 13) {
             sum += c;
         }
         return sum;
  }
  let result =  luckySum(1,2,3);
  console.log(result);