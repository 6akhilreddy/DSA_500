// 543. Diameter of Binary Tree - leetcode
// https://www.youtube.com/watch?v=Rezetez59Nk&t=228s
var diameterOfBinaryTree = function(root) {
    var diameter = {val: 0};
    height(root, diameter);
    return diameter.val;
};

var height = function(root, diameter){
    if(!root) return 0;
    let lh = height(root.left, diameter);
    let rh = height(root.right, diameter);
    diameter.val = Math.max(diameter.val, lh+rh);
    return 1+Math.max(lh,rh);
}