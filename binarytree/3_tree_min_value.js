// https://structy.net/problems/tree-min-value
const treeMinValue = (root) => {
  // todo
  if (!root) return Infinity;
  let leftMin = treeMinValue(root.left);
  let rightMin = treeMinValue(root.right);

  return Math.min(root.val, leftMin, rightMin);
};
