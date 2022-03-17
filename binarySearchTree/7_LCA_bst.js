// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

var lowestCommonAncestor = function(root, p, q) {
    let lca = root;
    let pt1=root,pt2=root;
    let isPfound = false, isQfound = false
    while(pt1 && pt2){
        if(p.val < pt1.val){
            pt1 = pt1.left
        }else if(p.val > pt1.val){
            pt1 = pt1.right
        }else{
            isPfound = true
        }
        
        if(q.val < pt2.val){
            pt2 = pt2.left
        }else if(q.val > pt2.val){
            pt2 = pt2.right
        }else{
            isQfound = true
        }
        if(pt1.val === pt2.val) lca = pt1
        if(isPfound && isQfound) break
    }
    return lca
};

var lowestCommonAncestor = function(root, p, q) {
    while(root){
        if(p.val < root.val && q.val < root.val){
            root = root.left
        }else if(p.val > root.val && q.val > root.val){
            root = root.right
        }else{
            return root
        }
    }
};