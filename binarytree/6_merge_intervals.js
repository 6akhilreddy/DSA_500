// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// https://www.youtube.com/watch?v=2JzRBPFYbKE

function mergeIntervals(intervals){
    intervals.sort((a,b) => a[0]-b[0])
    let checkInterval = intervals[0];
    const output = [];
    for(let interval of intervals){
        if(interval[0] <= checkInterval[1]){
            checkInterval[1] = Math.max(interval[1], checkInterval[1]);
        }else{
            output.push(checkInterval)
            checkInterval = interval;
        }
    }
    output.push(checkInterval);
    return output
}

const intervals = [[1,3],[2,6],[8,10],[15,18],[2,5],[7,11]];
console.log(mergeIntervals(intervals))