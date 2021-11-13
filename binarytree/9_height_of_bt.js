// 104. Maximum Depth of Binary Tree - leetcode
var maxDepth = function(root) {
    if(!root) return 0;
    return Math.max(maxDepth(root.left)+1, maxDepth(root.right)+1);
};

var minDepth = function(root) {
    if(!root) return 0;
    if(!root.left && !root.right) return 1;
    
    if(!root.left) return minDepth(root.right)+1
    if(!root.right) return minDepth(root.left)+1
    
    return 1+Math.min(minDepth(root.left), minDepth(root.right))
};