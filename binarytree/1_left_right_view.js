// https://leetcode.com/problems/binary-tree-right-side-view/

// see this for left view
// https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1

// var rightSideView = function(root) {
//     const output = [];
//     if(!root) return output;
//     const heightSeen = new Set();
//     const queue = [[root, 0]];
//     while(queue.length > 0){
//         const [node, height] = queue.shift();
//         if(!heightSeen.has(height)) output.push(node.val)
//         heightSeen.add(height)
//         if(node.right) queue.push([node.right, height+1])
//         if(node.left) queue.push([node.left, height+1])
//     }
//     return output
// };

var rightSideView = function (root) {
  const output = [];
  if (!root) return output;
  rightView(root, 0, output);
  return output;
};

const rightView = (root, level, output) => {
  if (!root) return;
  if (!output[level]) output.push(root.val);
  rightView(root.right, level + 1, output);
  rightView(root.left, level + 1, output);
};
