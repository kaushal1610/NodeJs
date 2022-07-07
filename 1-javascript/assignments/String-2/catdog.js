function catDog(str){
    let a = 0;
    let b = 0;
          for (let i = 0; i < str.length; i++) {
              if (str.substring(i, i + 3)=='cat') {
                  a++;
              }
              if (str.substring(i, i + 3)=='dog') {
                  b++;
              }
          }
          return a == b;
   }
       let result =  catDog('catdog');
console.log(result);