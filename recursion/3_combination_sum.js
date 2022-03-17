// https://leetcode.com/problems/combination-sum/
var combinationSum = function(candidates, target) {
    const output = [];
    getCombinations(candidates, 0, target, output)
    return output
};

var getCombinations = function(arr, i, sum, output, temp=[]){
    if(i >= arr.length) return
    if(sum < 0) return
    if(sum === 0){
        output.push(temp)
        return
    }
    
    getCombinations(arr, i, sum-arr[i], output, [...temp, arr[i]])
    
    getCombinations(arr, i+1, sum, output, temp)
}