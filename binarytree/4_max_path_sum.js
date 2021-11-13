// https://structy.net/problems/max-root-to-leaf-path-sum
const maxPathSum = (root) => {
  // todo
  if (!root) return -Infinity;
  if (root.left === null && root.right === null) return root.val;
  let leftSum = maxPathSum(root.left);
  let rightSum = maxPathSum(root.right);

  return root.val + Math.max(leftSum, rightSum);
};
