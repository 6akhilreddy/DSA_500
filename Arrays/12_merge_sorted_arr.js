// Given two sorted arrays arr1[] of size N and arr2[] of size M. Each array is sorted in non-decreasing order. Merge the two arrays into one sorted array in non-decreasing order without using any extra space.
// Example 1:

// Input:
// N = 4, M = 5
// arr1[] = {1, 3, 5, 7}
// arr2[] = {0, 2, 6, 8, 9}
// Output: 0 1 2 3 5 6 7 8 9
// Explanation: Since you can't use any 
// extra space, modify the given arrays
// to form 
// arr1[] = {0, 1, 2, 3}
// arr2[] = {5, 6, 7, 8, 9}

// Example 2:

// Input:
// N = 2, M = 3
// arr1[] = {10, 12}
// arr2[] = {5, 18, 20}
// Output: 5 10 12 18 20
// Explanation: Since you can't use any
// extra space, modify the given arrays
// to form 
// arr1[] = {5, 10}
// arr2[] = {12, 18, 20}

// https://www.youtube.com/watch?v=hVl2b3bLzBw

function mergeTwoSortedArr(arr1, arr2){
    let pt1 = 0;
    while(pt1 < arr1.length){
        if(arr2[0] < arr1[pt1]){
            [arr2[0], arr1[pt1]] = [arr1[pt1], arr2[0]]
            pt1++;
            let pt2 = 0;
            while(pt2 < arr2.length-1){
                if(arr2[pt2] > arr2[pt2+1]){
                    [arr2[pt2], arr2[pt2+1]] = [arr2[pt2+1], arr2[pt2]]
                    pt2++;
                }else{
                    break;
                }
            }
        }
    }
}

const arr1 = [1, 3, 5, 7];
const arr2 = [0, 2, 6, 8, 9];

mergeTwoSortedArr(arr1, arr2)

console.log(arr1, arr2);