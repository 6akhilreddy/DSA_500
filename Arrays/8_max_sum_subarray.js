// find the largest sum continous sub array

/*
Approach: Kaden's Algorithm

1.Take two variables max_so_far and max_ending_here
2.add the current element to max_ending_here
3.check if max_ending_here is less than the current element and update the max_ending_here with the current element
4.check if the max_so_far is less than max_ending_here and update the max_so_far with max_ending_here
*/

function maxSumSubArray(arr){
    // take the min value as per the given problem statement
    let max_so_far = Number.MIN_VALUE; max_ending_here = 0;
    arr.forEach((val) => {
        max_ending_here+=val;
        if(max_ending_here < val){
            max_ending_here = val
        }
        if(max_so_far < max_ending_here){
            max_so_far = max_ending_here
        }
    })

    return max_so_far;
}

function maxSumSubArray2(arr){
    let max_so_far = arr[0];
    let max_ending_here = arr[0];

    for(let i=1; i<arr.length; i++){
        max_ending_here = Math.max(arr[i], max_ending_here+arr[i]);
        max_so_far = Math.max(max_so_far, max_ending_here);
    }

    return max_so_far;
}

function maxSumSubArrayWithIndices(arr){
    // take the min value as per the given problem statement
    let max_so_far = Number.MIN_VALUE, max_ending_here = 0, start=0, end=0;
    arr.forEach((val, i) => {
        max_ending_here+=val;
        if(max_ending_here < val){
            max_ending_here = val;
            start = i
        }
        if(max_so_far < max_ending_here){
            max_so_far = max_ending_here;
            end = i
        }
    })

    return {max_so_far, start, end};
}

const arr = [ -2, -3, 4, -1, -2, 1, 5, -3 ]
console.log(maxSumSubArrayWithIndices(arr))