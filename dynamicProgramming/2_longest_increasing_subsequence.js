// https://leetcode.com/problems/longest-increasing-subsequence/
// https://www.youtube.com/watch?v=SHFyIAnjj90

// notes num - 5

var lengthOfLIS = function(nums) {
    return lis(nums, 0, -1)
};

var lis = function(nums, curr, prev, memo={}){
    if(curr >= nums.length) return 0;
    
    if(prev in memo) return memo[prev]
    
    let include = 0;
    if(prev === -1 || nums[curr] > nums[prev]){
        include = 1+lis(nums, curr+1, curr, memo)
    }
    
    let exclude = lis(nums, curr+1, prev, memo)
    
    memo[prev] = Math.max(include, exclude)
    
    return memo[prev]
}

// https://www.youtube.com/watch?v=mouCn3CFpgg

var lis = function(nums){
    const dp = Array(nums.length).fill(1);

    for(let i=1; i<nums.length; i++){
        for(let j=0; j<i; j++){
            if(nums[j] < nums[i] && dp[i] <= dp[j]){
                dp[i] = 1+dp[j]
            }
        }
    }
    
    return Math.max(...dp)
}

// https://www.youtube.com/watch?v=TocJOW6vx_I

var lis = function(nums){
    const seqArr = [];
    seqArr.push(nums[0]);

    for(let i=1; i<nums.length; i++){
        if(nums[i] > seqArr[seqArr.length-1]){
            seqArr.push(nums[i])
        }else{
            const replaceIdx = exactOrImmediate(seqArr, nums[i]);
            seqArr[replaceIdx] = nums[i]
        }
    }

    return seqArr.length
}

var exactOrImmediate = function(nums, target){
    let start = 0, end = nums.length;
    let prevIdx = null;
    while(start < end){
        const mid = Math.floor((start+end)/2);

        prevIdx = mid;

        if(nums[mid] === target) return mid;

        else if(nums[mid] > target)  end = mid;

        else start = mid+1;
    }
    return start;
}

console.log(exactOrImmediate([1,3,5,6,8,9],4))