// https://leetcode.com/problems/count-complete-tree-nodes/
var countNodes = function(root) {
    if(!root) return 0;
    let lh = getLeftHeight(root);
    let rh = getRightHeight(root);
    if(lh === rh) return Math.pow(2, lh)-1
    else return 1+countNodes(root.left)+countNodes(root.right)
};

var getLeftHeight = function(node) {
    if(!node) return 0;
    return 1+getLeftHeight(node.left);
}
var getRightHeight = function(node) {
    if(!node) return 0;
    return 1+getRightHeight(node.right);
}