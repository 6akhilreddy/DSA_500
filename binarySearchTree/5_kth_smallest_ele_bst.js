// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

var kthSmallest = function(root, k) {
    let minval = -1;
    function inorder(root){
        if(!root) return;
        inorder(root.left);
        k-=1;
        if(k===0){
            minval = root.val;
            return;
        }
        if(k<0) return; // to not execute the right half if found the value
        inorder(root.right);
    }
    inorder(root);
    return minval;
};