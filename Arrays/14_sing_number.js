// https://leetcode.com/problems/single-number/
// https://www.youtube.com/watch?v=krgK0UlfNYY

var singleNumber = function(nums) {
    let result = 0;
    for(num of nums){
        result ^= num
        console.log(result, num)
    }
    return result
};

console.log(singleNumber([4,1,2,1,2]))