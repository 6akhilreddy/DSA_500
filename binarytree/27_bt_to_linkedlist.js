// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/

var flatten = function(root) {
    let prev = null;
    function flat(root){
        if(!root) return;
        flat(root.right)
        flat(root.left)
        root.right = prev;
        root.left = null;
        prev = root;
        return root;
    }
    return flat(root);
}