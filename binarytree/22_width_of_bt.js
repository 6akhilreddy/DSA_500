// https://leetcode.com/problems/maximum-width-of-binary-tree/

var widthOfBinaryTree = function(root) {
    if(!root) return 0;
    const queue = [[root, 0]];
    let maxWidth = 0;
    while(queue.length){
        const queLen = queue.length;
        const minIdx = Math.min(...queue.map((val) => val[1]))
        let first=0, last = 0;
        for(let i=0; i<queLen; i++){
            const [node, index] = queue.shift();
            let curridx = index-minIdx;
            if(i === 0) first = curridx;
            if(i === queLen-1) last = curridx
            if(node.left) queue.push([node.left, 2*curridx+1]);
            if(node.right) queue.push([node.right, 2*curridx+2]);
            
        }
        maxWidth = Math.max(maxWidth, last-first+1)
    }
    return maxWidth
};