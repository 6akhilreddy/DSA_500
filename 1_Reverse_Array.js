// reverse the array or string both recursively and itteratively

// iterative
function reverseArrItr(arr){
    let start = 0, end = arr.length-1;
    while(start<end){
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++;
        end--;
    }
}

function reverseArrRec(arr, start, end){
    if(start>end) return
    [arr[start], arr[end]] = [arr[end], arr[start]]
    return reverseArrRec(arr,start+1, end-1)
}

const arr = [1,2,3,4,5]
reverseArrItr(arr)
reverseArrRec(arr, 0, arr.length-1)
console.log(arr)