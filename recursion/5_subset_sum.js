// https://practice.geeksforgeeks.org/problems/subset-sums2234/1
class Solution {
    subsetSums(arr,n){
       //code here
       const output = []
       this.getSum(arr, 0, 0, output)
       output.sort((a,b) => a-b)
       return output
    }
    
    getSum(arr, i, sum, output){
        if(i>=arr.length){
            output.push(sum)
            return
        }
        
        this.getSum(arr, i+1, sum+arr[i], output)
        this.getSum(arr, i+1, sum, output)
    }
}
