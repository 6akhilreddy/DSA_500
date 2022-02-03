// https://www.interviewbit.com/problems/burn-a-tree/
function getMinTimeToBurnTree(root, node){
	if(!root) return 0;
	const parentObj = {};
	const targetNode = assignParentNodesAndGetTargetNode(root, parentObj, node);

	let time = 0;

	const visited = new Set();
	visited.add(targetNode);
	const queue = [targetNode];

	while(queue.length){
		const len = queue.length;
		let isBurnt = false;
		for(let i=0; i<len; i++){
			const child = queue.shift();
			if(child.left && !visited.has(child.left)){
				isBurnt = true;
				queue.push(child.left);
				visited.add(child.left);
			}
			if(child.right && !visited.has(child.right)){
				isBurnt = true;
				queue.push(child.right);
				visited.add(child.right);
			}
			if(parentObj[child.data] && !visited.has(parentObj[child.data])){
				isBurnt = true;
				queue.push(parentObj[child.data]);
				visited.add(parentObj[child.data]);
			}
		}
		if(isBurnt) time++
	}

	return time
}

function assignParentNodesAndGetTargetNode(root, parentObj, target){
	const queue = [[root, null]];
    let targetNode = null;
    while(queue.length){
        const [node, parent] = queue.shift();
        parentObj[node.data] = parent;
        if(node.data === target) targetNode = node;
        if(node.left) queue.push([node.left, node]);
        if(node.right) queue.push([node.right, node]);
    }
    return targetNode
}