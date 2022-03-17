// https://leetcode.com/problems/delete-node-in-a-bst/

var deleteNode = function(root, key) {
    if(!root) return null;
    
    else if(key < root.val) root.left = deleteNode(root.left, key)
    
    else if(key > root.val) root.right = deleteNode(root.right, key)
    
    else{
        if(!root.left && !root.right)  root = null;
        else if(!root.left) root = root.right;
        else if(!root.right) root = root.left;
        else{
            let minNode = findMinNode(root.right);
            root.val = minNode.val;
            root.right = deleteNode(root.right, minNode.val)
        }
    }
    
    return root
    
}

var findMinNode = function(root){
    if(!root.left) return root;
    return findMinNode(root.left)
}