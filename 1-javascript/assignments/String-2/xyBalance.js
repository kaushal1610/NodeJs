function xyBalance(str){
    if ((str.lastIndexOf("y") > str.lastIndexOf("x"))) {
          return true;
      }
      if (str.indexOf("x") == str.indexOf("y")) {
          return true;
      }
      return false;
}
let result =  xyBalance('xyzyxx');
console.log(result);