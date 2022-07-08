function sum3(nums){
    let sum = 0;
           for(let i = 0; i < nums.length  ; i++){
               sum+= nums[i];
           }
           return sum;
   }
   let result =  sum3(1,2,6);
   console.log(result);