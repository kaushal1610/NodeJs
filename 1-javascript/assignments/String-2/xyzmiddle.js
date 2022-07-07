function xyzMiddle(str){
    let front = 0;
       let end = 0;
       let res = 0;
       for (let i = 0; i < str.length- 2; i++) {
           if (str.length >= 3 && str.substring(i, i + 3)=='xyz') {
               front = str.substring(0, i).length;
               end = str.substring(i + 3, str.length).length;
               res = front - end;
               if (Math.abs(res) <= 1) {
                   return true;
               }
           }
       }
       return false;
}
let result =  xyzMiddle('Ice Cream', 2);
console.log(result);