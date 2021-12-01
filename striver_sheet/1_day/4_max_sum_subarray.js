// https://leetcode.com/problems/maximum-subarray/
var maxSubArray = function(nums) {
    let currentMax=0, maxSoFar = nums[0];
     for(let num of nums){
         currentMax = currentMax+num
         maxSoFar = Math.max(currentMax, maxSoFar);
         if(currentMax < 0) currentMax = 0
     };
     return maxSoFar
 };