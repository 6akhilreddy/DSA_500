// https://leetcode.com/problems/sort-colors/
var sortColors = function(nums) {
    let low=0, mid=0, high=nums.length-1;
    while(mid <= high){
        if(nums[mid] === 0){
            swap(nums, low, mid);
            mid++;
            low++
        }else if(nums[mid] === 2){
            swap(nums, mid, high);
            high--;
        }else if(nums[mid] ===1){
            mid++;
        }
    }
};

var swap = function(nums, i, j){
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}