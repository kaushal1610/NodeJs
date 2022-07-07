function repeatEnd(str, n){
    let result = "";
    for (let i = 0; i < n; i++) {
        result = result + str.substring(str.length - n, str.length);
    }
    return result;
}
let result =  repeatEnd('heloo',2);
console.log(result);