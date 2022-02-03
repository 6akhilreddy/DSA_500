// https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1/

topView(root);
{
  //your code here
  const output = [];
  if (!root) return output;

  const queue = [[root, 0]];
  const levelObj = {};

  while (queue.length) {
    const [node, vlevel] = queue.shift();
    if (!levelObj[vlevel]) levelObj[vlevel] = node.data;
    if (node.left) queue.push([node.left, vlevel - 1]);
    if (node.right) queue.push([node.right, vlevel + 1]);
  }

  const vkeys = Object.keys(levelObj).sort((a, b) => Number(a) - Number(b));
  for (let vkey of vkeys) {
    output.push(levelObj[vkey]);
  }

  return output;
}
