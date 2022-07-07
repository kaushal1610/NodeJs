function oneTwo(str){
    let res = "";
        for (let i = 0; i < str.length- 2; i++) {
            if (i % 3 == 0) {
                res = res + str.substring(i + 1, i + 3) + str.charAt(i);
            }
        }
        return res;
 }
 let result =   oneTwo('abc');
console.log(result);
