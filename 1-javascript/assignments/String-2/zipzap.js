function zipZap(str){
    let result = "";
        if (str.length>= 3) {
            for (let i = 0; i < str.length- 2; i++) {
                result = result + str.charAt(i);
                if (str.charAt(i) == 'z' && str.charAt(i + 2) == 'p') {
                    result += "p";
                    i += 2;
                }
            }
            if (result==(str.substring(0, str.length- 2))) {
                return str;
            }
            return result;
        }
        return str;
}
let result =   zipZap('zipXzap');
console.log(result);
