// https://www.youtube.com/watch?v=q_a6lpbKJdw&list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk&index=22
var verticalTraversal = function(root) {
    const output = [];
    const verticalValues = {};
    const queue = [[root, 0]];
    while(queue.length > 0){
        const [node, vlevel] = queue.shift();
        
        if(vlevel in verticalValues) verticalValues[vlevel].push(node.val)
        else verticalValues[vlevel] = [node.val]
        
        if(node.left) queue.push([node.left, vlevel-1])
        if(node.right) queue.push([node.right, vlevel+1])
    }
    const keys = Object.keys(verticalValues).sort((a,b) => Number(a)-Number(b))
    for(let key of keys){
        output.push(verticalValues[key])
    }
    
    return output
};