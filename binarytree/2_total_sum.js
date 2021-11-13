// https://structy.net/problems/tree-sum
const treeSum = (root) => {
  // todo
  if (!root) return 0;

  let sum = root.val;
  sum += treeSum(root.left);
  sum += treeSum(root.right);

  return sum;
};
