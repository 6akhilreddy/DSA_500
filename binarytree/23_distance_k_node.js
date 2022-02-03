// https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/

var distanceK = function(root, target, k) {
    if(!root) return [];
    const parentObj = {};
    attachParent(root, parentObj);
    
    // console.log(parentObj);
    
    const visited = new Set();
    const targetNode = getTargetNode(root, target);
    
    const output = [];
    traverseAndFind(targetNode, parentObj, k, output, visited)
    
    return output;
};

var traverseAndFind = function(target, parentObj, k, output, visited){
    if(!target) return
    if(visited.has(target)) return
    if(k===0) {
        output.push(target.val);
        return
    }
    visited.add(target)
    traverseAndFind(target.left, parentObj, k-1, output, visited);
    traverseAndFind(target.right, parentObj, k-1, output, visited);
    traverseAndFind(parentObj[target.val], parentObj, k-1, output, visited);
}

var getTargetNode = function(root, target){
    if(!root) return null
    if(root === target) return root;
    let left = getTargetNode(root.left, target);
    if(left) return left;
    let right = getTargetNode(root.right, target);
    if(right) return right;
}

var attachParent = function(root, parentObj){
    const queue = [[root, null]];
    while(queue.length){
        const [node, parent] = queue.shift();
        parentObj[node.val] = parent;
        if(node.left) queue.push([node.left, node]);
        if(node.right) queue.push([node.right, node]);
    }
}

// can use this function to attach the parent and find the targetNode at same time
var attachParentAndGetTargetNode = function(root, parentObj, target){
    const queue = [[root, null]];
    let targetNode = null;
    while(queue.length){
        const [node, parent] = queue.shift();
        parentObj[node.val] = parent;
        if(node === target) targetNode = node;
        if(node.left) queue.push([node.left, node]);
        if(node.right) queue.push([node.right, node]);
    }
    return targetNode
}