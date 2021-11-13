// move all the neagtive integers to one side of the array

function negativeLeft(arr){
    let left = 0; right = arr.length-1;
    while(left<=right){
        if(arr[left] < 0 && arr[right] < 0) left++;
        else if(arr[left] >= 0 && arr[right] >= 0) right--;
        else if(arr[left] >=0 && arr[right] < 0){
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++;
            right--;
        }else{
            left++;
        }
    }
}

const arr1 = [-12, 11, -13, -5, 6, -7, 5, -3, 11]
const arr2 = [-1, 2, -3, 4, 5, 6, -7, 8, 9]
negativeLeft(arr1)
negativeLeft(arr2)
console.log(arr1)
console.log(arr2)