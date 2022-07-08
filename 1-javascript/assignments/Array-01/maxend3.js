function maxEnd3(nums){
    var a = Math.max(nums[0], nums[2]);
   
   nums[0] = a;
   nums[1] = a;
   nums[2] = a;
   return nums;
 }
 let result =  maxEnd3(1,2,6);
 console.log(result);