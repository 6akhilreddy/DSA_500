// sort the array containing 0,1,2 with O(n) time and O(1) space

/*
Approach: 
1. Take three pointers low, mid, high
2. intilize low and mid to 0 and high to N
3. traverse the mid for mid>= high
4. if 0 is found swap mid with low
5. if 2 is found swap mid with high
*/


function sort012(arr){
    let low=0, mid=0, high=arr.length-1;
    while(mid <= high){
        if(arr[mid] === 0){
            [arr[low], arr[mid]] = [arr[mid], arr[low]]
            low++;
            mid++;
        }else if(arr[mid] === 1){
            mid++;
        }else if(arr[mid] === 2){
            [arr[mid], arr[high]] = [arr[high], arr[mid]]
            high--;
        }
    }
}

const arr = [0,1,2,0,1,2]
sort012(arr)
console.log(arr)