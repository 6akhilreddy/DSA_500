// https://leetcode.com/problems/subsets-ii/
var subsetsWithDup = function(nums) {
    const output = []
    nums.sort((a,b) => a-b)
    getSubsets(nums, 0, output)
    return output
};

var getSubsets = function(nums, i, output, temp = []){
    output.push(temp)
    
    if(i >= nums.length) return
    
    for(let j=i; j<nums.length; j++){
        if(j>i && nums[j] === nums[j-1]) continue
        
        getSubsets(nums, j+1, output, [...temp, nums[j]])
    }
    
}