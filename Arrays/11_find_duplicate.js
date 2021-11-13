// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3
// Example 3:

// Input: nums = [1,1]
// Output: 1
// Example 4:

// Input: nums = [1,1,2]
// Output: 1

// This solution will not work if the repating ele is multiple ex: [1,2,2,2,3,4]
function findDuplicate1(nums){
    const eleSum = nums.reduce((a, b) => a + b, 0)
    const n = nums.length-1;
    const maxSum = (n*(n+1))/2;
    return maxSum - eleSum;
}

function findDuplicate(nums){
    for(let i=0; i<nums.length; i++){
        if(nums[Math.abs(nums[i])] > 0){
            nums[Math.abs(nums[i])] = -nums[Math.abs(nums[i])]
        }else{
            return Math.abs(nums[i])
        }
    }
}

// leetcode 441
function findAllDuplicates(nums){
    const output = [];
    for(let i=0; i<nums.length; i++){
        if(nums[Math.abs(nums[i])-1] > 0){
            nums[Math.abs(nums[i])-1] = -nums[Math.abs(nums[i])-1]
        }else{
            output.push(Math.abs(nums[i]));
        }
    }
    return output
}