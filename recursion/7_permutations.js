// https://leetcode.com/problems/permutations/

 var permute = function(nums) {
    const output = [];
    // getPermutations(nums, output)
    getOptPermutations(nums, output)
    return output
};

var getPermutations = function(arr, output, temp=[], freq=[]){
    if(temp.length === arr.length){
        output.push(temp)
        return
    }

    for(let i=0; i<arr.length; i++){
        if(!freq[i]){
            freq[i] = true
            getPermutations(arr, output, [...temp, arr[i]],freq)
            freq[i] = false
        }
    }
}

var getOptPermutations = function(arr, output, index = 0){
    
    if(index >= arr.length){
        output.push([...arr])
        return
    }
    
    for(let i=index; i<arr.length; i++){
        
        swap(arr, index, i)
        
        getOptPermutations(arr, output, index+1)
        
        swap(arr, index, i)
        
    }
}

var swap = function(arr, i, j){
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}






