function reverse3(nums){
    let x = nums[0];
    nums[0] = nums[2];
    nums[2] = x;
    return nums;
  }
  let result =  reverse3(1,2,6);
  console.log(result);