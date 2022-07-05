function countXX(str,n){
    let len = 0;
   for(let i=0;i<str.length;i++){
   if(str.indexOf("xx",i)==i)
   len++;
   }
   return len;
 
 }
 let result =   countXX('xxxx');
 console.log(result);