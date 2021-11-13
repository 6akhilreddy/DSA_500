// https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1
function topView(root)
{
    //your code here
    const output = [];
    const vMap = {};
    
    const queue = [[root, 0]]
    while(queue.length > 0){
        const [node, vlevel] = queue.shift();
        
        if(!(vlevel in vMap)) vMap[vlevel] = [node.data]
        
        if(node.left) queue.push([node.left, vlevel-1])
        if(node.right) queue.push([node.right, vlevel+1])
        
    }
    
    const keys = Object.keys(vMap).sort((a,b) => Number(a)-Number(b));
    
    for(let key of keys){
        output.push(vMap[key][0])
    }
    
    return output
}

function bottomView(root)
{
    //your code here
    const output = [];
    const vMap = {};
    
    const queue = [[root, 0]]
    while(queue.length > 0){
        const [node, vlevel] = queue.shift();
        
        if(vlevel in vMap) vMap[vlevel].push(node.data)
        else vMap[vlevel] = [node.data]

        if(node.left) queue.push([node.left, vlevel-1])
        if(node.right) queue.push([node.right, vlevel+1])
        
    }
    
    const keys = Object.keys(vMap).sort((a,b) => Number(a)-Number(b));
    
    for(let key of keys){
        const arr = vMap[key]
        output.push(arr[arr.length-1])
    }
    
    return output
}