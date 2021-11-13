// rotate the array by one
function rotate(arr){
    let left=0, right=arr.length-1;
    while(left < arr.length){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
    }
    return arr
 }

 function rotatektimes(arr, k){
    k = k%arr.length;
    if(k === arr.length) return arr

    const output = [];
    arr.forEach((val, i) => {
        if(i<k){
            output.push(arr[(arr.length+i)-k])
        }else{
            output.push(arr[i-k])
        }
    })

    return output
 }

//  const arr = [1,2,3,4,5]
//  rotate(arr)
//  console.log(arr)

const arr = [1,3,5,7,9]
console.log(rotatektimes(arr, 2))