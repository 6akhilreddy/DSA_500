// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.
// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

// https://www.youtube.com/watch?v=muDPTDrpS28

function canJump(nums){
    let maxReach = 0;
    for(let i=0; i<nums.length; i++){
        if(maxReach < i) return false
        maxReach = Math.max(maxReach, i+nums[i])
    }
    return true
}

const nums = [3,2,1,0,4]
console.log(canJump(nums))


// harder question
// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

// You can assume that you can always reach the last index.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2


function minJumpsToEnd(nums){
    let steps = 0;
    let right=0,left=0;

    while(right < nums.length-1){
        let maxReach = 0;
        for(let i=left; i<=right; i++){
            maxReach = Math.max(maxReach, i+nums[i])
        }
        if(maxReach === 0) return -1
        left = right+1;
        right = maxReach;
        steps++;
    }

    return steps
}