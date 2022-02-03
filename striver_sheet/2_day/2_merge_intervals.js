// https://leetcode.com/problems/merge-intervals/

/* 
1.Sort the first value
2.Get the max if the second interval is less than the first interval of next element
3.else put the interval in output
*/
var merge = function(intervals) {
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
};