// 107. Binary Tree Level Order Traversal II - leetcode
var levelOrderReverse = function(root) {
    if(!root) return []
    const output = [];
    const queue = [];
    queue.push(root);
    while(queue.length !== 0){
        const queLen = queue.length;
        const tempArr = [];
        for(let i=0;i<queLen;i++){
            const temp = queue.shift();
            tempArr.push(temp.val);
            if(temp.left) queue.push(temp.left);
            if(temp.right) queue.push(temp.right);
        }
        output.unshift(tempArr)
    }
    return output
};