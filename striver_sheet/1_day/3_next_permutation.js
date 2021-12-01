// https://www.youtube.com/watch?v=9xT2Xzlo4i4
// https://leetcode.com/problems/next-permutation/

var nextPermutation = function(nums) {
    const length = nums.length
    // step1 - find the first decreasing element from behind
    let sIdx = -1; // taken -1 to handle none is decreasing [3,2,1]
    for(let i=length-1; i>0; i--){
        if(nums[i-1] < nums[i]){
            sIdx = i-1;
            break; // break the loop since we need to find the first decresing ele
        }
    }
    // step2 - reverse from sIdx+1 to the end
    reverse(nums, sIdx+1, length-1)

    // step3 - check for the next greater element after reverese and swap it with sIdx
    if(sIdx >=0){
        let lIdx = sIdx;
        for(let i=sIdx+1; i<length; i++){
            if(nums[i] > nums[sIdx]){
                lIdx = i;
                break;
            }
        }
        swap(nums, sIdx, lIdx)
    }
    
}

var reverse = function(nums, start, end){
    if(start >= end) return;
    swap(nums, start, end);
    reverse(nums, start+1, end-1);
}

var swap = function(nums, idx1, idx2){
    let temp = nums[idx1];
    nums[idx1] = nums[idx2];
    nums[idx2] = temp;
}

const nums = [2,3,1];
nextPermutation(nums);
console.log(nums)