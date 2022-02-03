// https://www.youtube.com/watch?v=q_a6lpbKJdw&list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk&index=22
// https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/
var verticalTraversal = function(root) {
    if(!root) return [];
    const levelObj = {};
    const queue = [[root, 0, 0]];
    while(queue.length){
        const [node, vlevel, hlevel] = queue.shift();
        
        if(levelObj[vlevel]){
            if(!levelObj[vlevel][hlevel]) levelObj[vlevel][hlevel] = []
            levelObj[vlevel][hlevel].push(node.val);
        }else{
            levelObj[vlevel] = {};
            levelObj[vlevel][hlevel] = [node.val];
        }
        
        // hlevel is taken to sort the same level elements and store as per question
        if(node.left) queue.push([node.left, vlevel-1, hlevel+1]);
        if(node.right) queue.push([node.right, vlevel+1, hlevel+1])
    }
    const output = [];
    const vkeys = Object.keys(levelObj).sort((a,b) => Number(a)-Number(b))
    for(let vkey of vkeys){
        const row = [];
        for(let hkey in levelObj[vkey]){
            if(levelObj[vkey][hkey].length > 1) levelObj[vkey][hkey].sort((a,b) => a-b);
            row.push(...levelObj[vkey][hkey])
        }
        output.push(row)
    }
    return output
};