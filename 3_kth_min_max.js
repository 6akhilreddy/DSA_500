/*
    find the kth largest number in the array.

    Approach: The idea is to use the concept of Counting Sort. Below are the steps:

    1.Find the maximum element(say maxE) in the array and create an array(say freq[]) of length maxE + 1 and initialize it to zero.
    2.Loop through all the element in the given array and store the frequency of the element in freq[].
    3.Iterate over the array freq[] until we reach the Kth element.
    4.Print the Kth element reached in the above step.

    time complexity: O(N + Max Ele)
    space complexity: O(Max Ele)

*/
function kthLargestNum(arr, k){
    var maxEle = Math.max(...arr);

    var freq = new Array(maxEle+1).fill(0);

    arr.forEach(element => {
       freq[element]++ 
    });

    var largest = 0;
    for(let i=freq.length-1;i>=0;i--){
       if(freq[i]>0){
           largest += freq[i];
       }

       if(largest >= k){
           console.log(i);
           break
       }
    }

}

function kthSmallestNum(arr, k){
    var maxEle = Math.max(...arr);

    var freq = new Array(maxEle+1).fill(0);

    arr.forEach(ele => {
        freq[ele]++;
    });

    var smallest = 0;
    for(let i=0; i<freq.length;i++){
        if(freq[i] > 0){
            smallest += freq[i]
        }

        if(smallest >= k){
            console.log(i);
            break
        }
    }
}

kthLargestNum([4,5,3,2,6,6], 5)
kthSmallestNum([4,5,3,2,6,6], 2)

// if the negative values are given in the array then we should use min heap, max heap or quick select technique
