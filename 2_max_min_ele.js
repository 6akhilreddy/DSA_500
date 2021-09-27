// find the maximum and minimum element in array
function maxmin(arr){
    let max = arr[0], min = arr[0];
    arr.forEach((val) => {
        max = Math.max(val, max);
        min = Math.min(val, min)
    })

    return {min, max}
}

console.log(maxmin([-1,5,0,-3,20]))