// https://leetcode.com/problems/subsets/
var subsets = function(nums, iOrE=[], output=[], index=0) {
    if(index >= nums.length){
        output.push(iOrE)
    }else{
        let ele = nums[index]
        subsets(nums,[...iOrE, ele], output, index+1)
        subsets(nums,iOrE, output, index+1)
    }
    return output
};