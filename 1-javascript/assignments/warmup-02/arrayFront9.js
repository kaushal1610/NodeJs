function arrayFront9(nums){
    let end = nums.length;
   if (end > 4) end = 4;
   
   for (let i=0; i<end; i++) {
     if (nums[i] == 9) return true;
   }
   
   return false;
 }
 let result =   stringSplosion(1,2,9,3,4);
 console.log(result);
 