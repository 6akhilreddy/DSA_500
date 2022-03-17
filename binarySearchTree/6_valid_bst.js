// brute force

var isValidBST = function(root) {
    if(!root) return false;
    const queue = [root];
    while(queue.length){
        const node = queue.shift();
        if(node.left){
            if(checkLeftBfs(node.left, node.val)) queue.push(node.left)
            else return false
        }
        if(node.right){
            if(checkRightBfs(node.right, node.val)) queue.push(node.right)
            else return false
        }
    }
    return true;
};

var checkLeftBfs = function(root, val){
    const queue = [root];
    while(queue.length){
        const node = queue.shift();
        if(node.val >= val) return false;
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }
    return true;
}

var checkRightBfs = function(root, val){
    const queue = [root];
    while(queue.length){
        const node = queue.shift();
        if(node.val <= val) return false;
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }
    return true;
}

// https://leetcode.com/problems/validate-binary-search-tree/

var isValidBST = function(root) {
    return checkValidity(root, -Infinity, Infinity)
};

var checkValidity = function(root, min, max){
    if(!root) return true
    if(!(root.val > min && root.val < max)) return false;
    return checkValidity(root.left, min, root.val) && checkValidity(root.right, root.val, max)  
}
