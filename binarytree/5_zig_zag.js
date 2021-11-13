// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/submissions/
var zigzagLevelOrder = function(root) {
    const output = [];
    if(!root) return output
    const queue = [root];
    let order = true;
    while(queue.length > 0){
        const queLen = queue.length;
        let row = [];
        for(let i=0; i<queLen; i++){
            const node = queue.shift();
            const index = order ? i : (queLen - 1 - i);
            row[index] = node.val;
            
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        order = !order;
        output.push(row)
    }
    return output
};