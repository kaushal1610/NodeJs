function getSandwich(str){
    for (let i = 0; i<str.length-4; i++){
           if(str.length>=5 && str.substring(i, i+5)=="bread"){
               if(str.lastIndexOf("bread") != -1 &&  i+5 < str.lastIndexOf("bread")){
                   return str.substring(i+5, str.lastIndexOf("bread") );
               }
           }
       }
       return "";
}
let result =   getSandwich('xxbreadjambreadyy');
console.log(result);
