function prefixAgain(str, n){
    let prefix = str.substring(0, n);
      for (let i = 0; i < str.length - n + 1; i++) {
          if (i >= n && prefix==(str.substring(i, i + n))) {
              return true;
          }
      }
      return false;
}
let result =  prefixAgain('abXYabc', 1);
console.log(result);