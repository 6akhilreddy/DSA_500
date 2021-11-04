// Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.
// Example 1:

// Input:
// N = 5
// Arr[] = {1,2,3,-2,5}
// Output:
// 9
// Explanation:
// Max subarray sum is 9
// of elements (1, 2, 3, -2, 5) which 
// is a contiguous subarray.
// Example 2:

// Input:
// N = 4
// Arr[] = {-1,-2,-3,-4}
// Output:
// -1
// Explanation:
// Max subarray sum is -1 
// of element (-1)

//https://www.youtube.com/watch?v=w_KEocd__20

function maxSumSubArr(arr){
    let sum = 0;
    let max = arr[0];

    for(let val of arr){
        sum += val;
        max = Math.max(sum, max);
        if(sum < 0) sum = 0;
    }

    return max;
}

const arr = [-11,-2,-3,-4]
console.log(maxSumSubArr(arr))