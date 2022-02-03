// 110. Balance BT

var isBalanced = function(root) {
    const height = getHeightIfBalanced(root);
     return height !== -1;
 };
 
 var getHeightIfBalanced = function(root){
     if(!root) return 0;
     
     let lh = getHeightIfBalanced(root.left);
     let rh = getHeightIfBalanced(root.right);
     
     if(Math.abs(lh-rh) > 1) return -1;
     if(lh==-1 ||rh==-1) return -1;
     
     return 1+Math.max(lh, rh);
 }