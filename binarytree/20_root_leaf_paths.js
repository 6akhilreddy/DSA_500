// https://leetcode.com/problems/binary-tree-paths/

// var binaryTreePaths = function(root) {
//     const output = [];
//     if(!root) return output;
//     getPaths(root, output);
//     return output;
// };

// var getPaths = function(root, output, temp = []){
//     if(isLeafnode(root)){
//         let str = '';
//         for(let val of temp){
//             str = str+val+'->'
//         }
//         str+=root.val;
//         output.push(str);
//         return
//     }
//     temp.push(root.val)
//     if(root.left)getPaths(root.left, output, temp)
//     if(root.right)getPaths(root.right, output, temp)
//     temp.pop();
// }

// var isLeafnode = function(root){
//     if(!root.left && !root.right) return true;
//     return false;
// }

