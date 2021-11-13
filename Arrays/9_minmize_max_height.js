// Given an array arr[] denoting heights of N towers and a positive integer K, you have to modify the height of each tower either by increasing or decreasing them by K only once. After modifying, height should be a non-negative integer. 
// Find out what could be the possible minimum difference of the height of shortest and longest towers after you have modified each tower.

// A slight modification of the problem can be found here.


// Example 1:

// Input:
// K = 2, N = 4
// Arr[] = {1, 5, 8, 10}
// Output:
// 5
// Explanation:
// The array can be modified as 
// {3, 3, 6, 8}. The difference between 
// the largest and the smallest is 8-3 = 5.
// Example 2:

// Input:
// K = 3, N = 5
// Arr[] = {3, 9, 12, 16, 20}
// Output:
// 11
// Explanation:
// The array can be modified as
// {6, 12, 9, 13, 17}. The difference between 
// the largest and the smallest is 17-6 = 11.

// https://www.youtube.com/watch?v=Av7vSnPSCtw&t=678s

/*
Explanation
1. sort the array so that we can get the immediate min and max
2. get the initial answer without add or sub k to compare the minium
3. get the largest and smallest after adding k
4. loop through the array
5. get the minimum of next element - k
6. get the maximum of current element + k
7. check if minimum is less than 0
8. compare the initial answer with max-min
*/

function minMaxHeight(arr, k, n){
    arr.sort((a,b) => a-b);
    let ans = arr[n-1] - arr[0];
    let smallest = arr[0]+k;
    let largest = arr[n-1]-k;
    for(let i=0; i<n-1; i++){
        const min = Math.min(smallest, arr[i+1]-k);
        const max = Math.max(largest, arr[i]+k);
        if(min < 0) continue;
        ans = Math.min(ans, max-min)
    } 
    return ans;
}

const arr = [2, 6, 3, 4, 7, 2, 10, 3, 2, 1]
const k = 5

console.log(minMaxHeight(arr, k, arr.length))