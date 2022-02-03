// https://leetcode.com/problems/merge-sorted-array/

// using insertion sort
// we can also use gap algorithm to merge two sorted arrays without 0's
var merge = function(nums1, m, nums2, n) {
    
    if(nums2.length == 0) return
    
    let pt1 = 0;
    while(pt1 < m){
        if(nums1[pt1] <= nums2[0]) pt1++;
        else{
            swap(nums1, nums2, pt1, 0);
            pt1++
            let pt2 = 0;
            while(pt2 < n-1){
                if(nums2[pt2] > nums2[pt2+1]){
                    swap(nums2, nums2, pt2, pt2+1);
                }
                pt2++
            }
        }
    }
    
    let pt2 = 0;
    while(pt2 < n){
        console.log(nums1[pt1], nums2[pt2])
        nums1[pt1] = nums2[pt2];
        pt1++;
        pt2++;
    }
};

var swap = function(nums1, nums2, i, j){
    const temp = nums1[i];
    nums1[i] = nums2[j];
    nums2[j] = temp;
}