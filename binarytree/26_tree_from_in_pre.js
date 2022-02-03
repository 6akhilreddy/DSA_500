// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

var buildTree = function(preorder, inorder) {
    // create a hashmap of inorder
    const inMap = {};
    inorder.forEach((val, idx) => {
        inMap[val] = idx;
    });
    
    return treeBuild(preorder, 0, preorder.length-1, inorder, 0, inorder.length-1, inMap)
};

var treeBuild = function(preorder, preStart, preEnd, inorder, inStart, inEnd, inMap) {
    if(preStart > preEnd || inStart > inEnd) return null;
    
    const val = preorder[preStart];
    const node = new TreeNode(val);
    
    const index = inMap[val];
    const inLeft = index - inStart;
    
    node.left = treeBuild(preorder, preStart+1, preStart+inLeft, inorder, inStart, index-1, inMap);
    node.right = treeBuild(preorder, preStart+inLeft+1, preEnd, inorder, index+1, inEnd, inMap);
    return node
}

// tree from inorder and postorder
// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/

var buildTree = function(inorder, postorder) {
    // create a hashmap of inorder
   const inMap = {};
   inorder.forEach((val, idx) => {
       inMap[val] = idx;
   });
   
   return treeBuild(postorder, 0, postorder.length-1, inorder, 0, inorder.length-1, inMap)
};

var treeBuild = function(preorder, preStart, preEnd, inorder, inStart, inEnd, inMap) {
   if(preStart > preEnd || inStart > inEnd) return null;
   
   const val = preorder[preEnd];
   const node = new TreeNode(val);
   
   const index = inMap[val];
   const inLeft = index - inStart;
   
   node.left = treeBuild(preorder, preStart, preStart+inLeft-1, inorder, inStart, index-1, inMap);
   node.right = treeBuild(preorder, preStart+inLeft, preEnd-1, inorder, index+1, inEnd, inMap);
   return node
}