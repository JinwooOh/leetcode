// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: [1,2,3,4,5,6,7] and k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 1. brute Force
// var rotate = function(nums, k) {
//     if(nums.length === 1 || nums.length === 0 || k < 1) return nums;
//     for(let j = 0; j < k; j++){
//         let lastItem = nums[nums.length-1];
//         for(let i = nums.length-1; i > 0; i--){
//             nums[i] = nums[i-1]
//         }
//         nums[0] = lastItem
//     }
// };

// 2 two array. trade with space
// var rotate = function(nums, k) {
//     let replaceArr = [];
//     for(let i = 0; i < nums.length; i++){
//         replaceArr[(i+k) % nums.length] = nums[i];
//     }

//     for(let i = 0; i < nums.length; i++){
//         nums[i] = replaceArr[i];
//     }
// };

// 3. using reverse
var rotate = function(nums, k){
  k = k % nums.length;
  reverse(nums, 0, nums.length-1); //reverse whole array
  reverse(nums, 0, k-1) //reverse 0 to k-1
  reverse(nums, k, nums.length-1);
}
let reverse = (arr, start, end) => {
  while(start < end){
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
  }
}
