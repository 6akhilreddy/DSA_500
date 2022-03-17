// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
var findTarget = function(root, k) {
    const inorder = []
    getInorder(root, inorder);
    let start=0, end=inorder.length-1;
    while(start < end){
        const val = inorder[start]+inorder[end]
        if(val === k) return true
        else if(val < k) start++;
        else end--
    }
    return false
};

var getInorder = function(root, inorder){
    if(!root) return;
    getInorder(root.left, inorder)
    inorder.push(root.val)
    getInorder(root.right, inorder)
}

/**
 * Method 2.
use a set to check if the k-node.val exists else add the val to set and peform normal dfs
 */

/**
 * Method 3.
The idea is to use binary search method. For each node, we check if k - node.val exists in this BST.
 */

/**
 * Method 4.
Use Binary Iterator to reduce the space to o(H)
 */