// https://leetcode.com/problems/find-the-duplicate-number/
var findDuplicate = function(nums) {
    for(let i=0; i<nums.length; i++){
        if(nums[Math.abs(nums[i])] > 0) nums[Math.abs(nums[i])] = -nums[Math.abs(nums[i])]
        else return Math.abs(nums[i])
    }
};