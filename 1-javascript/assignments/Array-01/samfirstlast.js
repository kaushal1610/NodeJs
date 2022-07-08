function sameFirstLast(nums){
    return nums.length > 0 && nums[0] == nums[nums.length - 1];
  }
  let result =  sameFirstLast(1,2,1);
  console.log(result);