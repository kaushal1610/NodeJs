function repeatFront(str, n){
    let a = "";
    for (let i = 0; i < n; i++) {
        a = a + str.substring(0, n - i);
    }
    return a;
 return a;
}
let result =  repeatFront('Ice Cream', 2);
console.log(result);