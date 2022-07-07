function repeatSeparator(word, sep, count){
    let result = "";
       for(let i = 0; i<count; i++){
           if(count == 1){
               return word;
           }
           result = result + word+sep;
       }
       return result.substring(0, result.length-sep.length);
}
let result =  repeatSeparator('Word', 'X', 3);
console.log(result);