const binarySeach = (arr, val, start, end) => {
    const mid = Math.floor((start+end)/2);
    if(val === arr[mid]) return mid;
    if(start >= end ) return -1;
    else if(val < arr[mid]) return binarySeach(arr, val, start, mid-1);
    else if(val > arr[mid]) return binarySeach(arr, val, mid+1, end);
    return -1
}

const binarySearchItr = (arr, target) => {
    let start = 0, end = arr.length-1;
    while(end >= start){
        const mid = Math.floor((start+end)/2);
        console.log(mid)
        if(arr[mid] === target) return mid;
        else if(target < arr[mid]) end = mid-1;
        else if(target > arr[mid]) start = mid+1;
    }
    return -1
}

const arr = [1,2,3,4,5,6,7,8]
// console.log(binarySeach(arr, 7, 0, arr.length))
console.log(binarySearchItr(arr, 14));