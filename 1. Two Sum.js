// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


function twoSum(nums, target){
  const map = {};
  for(let i = 0; i < nums.length; i++){
    const complement = target - nums[i];
    if(map.hasOwnProperty(complement)){
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }
  return null
}

console.log(twoSum([2, 7, 11, 15], 9));

//[0, 1]

