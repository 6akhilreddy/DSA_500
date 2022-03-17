// https://leetcode.com/problems/combination-sum-ii/
var combinationSum2 = function(candidates, target) {
    const output = []
    candidates.sort((a,b) => a-b)
    getComb(candidates, 0, target, output)
    return output
};

var getComb = function(arr, i, sum, output, temp=[]){
    
    if(sum === 0){
        output.push(temp)
        return
    }
    
    for(let j=i; j<arr.length; j++){
        if(j>i && arr[j] === arr[j-1]) continue
        if(arr[j] > sum) break
        getComb(arr, j+1, sum-arr[j], output, [...temp, arr[j]])
    }
    
}