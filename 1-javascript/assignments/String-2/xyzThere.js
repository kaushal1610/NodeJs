function xyzThere(str){
    for(let i = 0; i<str.length-2; i++ ){
             if(i==0 && str.substring(i, i+3)=="xyz"){
                 return true;
             }
             if(i > 1 && str.substring(i, i+3)=="xyz" && str.charAt(i-1) !='.'){
                 return true;
             }
         }
         return false;
  }
let result =  xyzThere('Hiabc.xyz');
console.log(result);