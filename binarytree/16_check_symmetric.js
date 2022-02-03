// 100. check if two trees are same

var isSameTree = function (p, q) {
  if (!p || !q) return p === q;
  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};

// 101. check symmetric

var isSymmetric = function (root) {
  return checkSymmetric(root.left, root.right);
};

var checkSymmetric = function (l, r) {
  if (!l || !r) return l === r;
  return (
    l.val === r.val &&
    checkSymmetric(l.left, r.right) &&
    checkSymmetric(l.right, r.left)
  );
};
