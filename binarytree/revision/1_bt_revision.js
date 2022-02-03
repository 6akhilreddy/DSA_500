class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const node = new Node(data);
    if (this.root === null) this.root = node;
    else {
      const queue = [this.root];
      while (queue.length) {
        const temp = queue.shift();
        if (temp.left === null) {
          temp.left = node;
          break;
        } else if (temp.right === null) {
          temp.right = node;
          break;
        } else {
          queue.push(temp.left);
          queue.push(temp.right);
        }
      }
    }
  }

  inorder(root) {
    if (root === null) return;
    console.log(root.data);
    this.inorder(root.left);
    this.inorder(root.right);
  }

  preorder(root) {
    if (root === null) return;
    this.preorder(root.left);
    console.log(root.data);
    this.preorder(root.right);
  }

  postorder(root) {
    if (root === null) return;
    this.postorder(root.left);
    this.postorder(root.right);
    console.log(root.data);
  }

  bfs(root) {
    if (root === null) return;
    const queue = [root];
    while (queue.length) {
      const temp = queue.shift();
      console.log(temp.data);
      if (temp.left) queue.push(temp.left);
      if (temp.right) queue.push(temp.right);
    }
  }
}

const bt = new BinaryTree();
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.forEach((val) => {
  bt.insert(val);
});
bt.bfs(bt.root);

// left right view
function leftView(root) {
  let heightSeen = 0;
  const queue = [[root, 0]];
  const output = [root.data];
  while (queue.length > 0) {
    const [node, height] = queue.shift();
    if (heightSeen !== height) output.push(node.data);
    heightSeen = height;
    if (node.left) queue.push([node.left, height + 1]);
    if (node.right) queue.push([node.right, height + 1]);
  }
  return output;
}

// recursion

function leftView(root) {
  const output = [];
  if (!root) return output;
  this.leftSideView(root, 0, output);
  return output;
}

function leftSideView(root, level, output) {
  if (!root) return;
  if (output[level] === undefined) output.push(root.data);
  this.leftSideView(root.left, level + 1, output);
  this.leftSideView(root.right, level + 1, output);
}

// zig zag view
var zigzagLevelOrder = function (root) {
  const output = [];
  if (!root) return output;
  const queue = [root];
  let isLToR = true;
  while (queue.length) {
    const len = queue.length;
    const row = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      // row.push(node.val);
      let index = isLToR ? i : len - 1 - i;
      row[index] = node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    // output.push(isLToR ? row.reverse() : row)
    output.push(row);
    isLToR = !isLToR;
  }
  return output;
};

// Diameter of BT

var diameterOfBinaryTree = function (root) {
  if (!root) return 0;
  const diameter = [0];
  getDiameter(root, diameter);
  return diameter[0];
};

var getDiameter = function (root, diameter) {
  if (!root) return 0;
  let lh = getDiameter(root.left, diameter);
  let rh = getDiameter(root.right, diameter);
  diameter[0] = Math.max(diameter[0], lh + rh);
  return 1 + Math.max(lh, rh);
};

// boundary traversal of BT
function boundaryTraversal(root) {
  const isLeafNode = (node) => {
    return !node.left && !node.right;
  };

  const leftBoundary = (root, output) => {
    let node = root.left;
    while (node) {
      if (!isLeafNode(node)) output.push(node.data);
      if (node.left) node = node.left;
      else node = node.right;
    }
  };

  const leafNodes = (root, output) => {
    if (isLeafNode(root)) {
      output.push(root.data);
      return;
    }
    if (root.left) leafNodes(root.left, output);
    if (root.right) leafNodes(root.right, output);
  };

  const rightBoundary = (root, output) => {
    let node = root.right;
    const tempArr = [];
    while (node) {
      if (!isLeafNode(node)) tempArr.push(node.data);
      if (node.right) node = node.right;
      else node = node.left;
    }

    for (let i = tempArr.length - 1; i >= 0; i--) {
      output.push(tempArr[i]);
    }
  };

  const output = [];
  if (!isLeafNode(root)) output.push(root.data);
  leftBoundary(root, output);
  leafNodes(root, output);
  rightBoundary(root, output);
  return output;
}

// vertical traversal of BT
var verticalTraversal = function (root) {
  if (!root) return [];
  const levelObj = {};
  const queue = [[root, 0, 0]];
  while (queue.length) {
    const [node, vlevel, hlevel] = queue.shift();

    if (levelObj[vlevel]) {
      if (!levelObj[vlevel][hlevel]) levelObj[vlevel][hlevel] = [];
      levelObj[vlevel][hlevel].push(node.val);
    } else {
      levelObj[vlevel] = {};
      levelObj[vlevel][hlevel] = [node.val];
    }

    if (node.left) queue.push([node.left, vlevel - 1, hlevel + 1]);
    if (node.right) queue.push([node.right, vlevel + 1, hlevel + 1]);
  }
  const output = [];
  const vkeys = Object.keys(levelObj).sort((a, b) => Number(a) - Number(b));
  for (let vkey of vkeys) {
    const row = [];
    for (let hkey in levelObj[vkey]) {
      if (levelObj[vkey][hkey].length > 1)
        levelObj[vkey][hkey].sort((a, b) => a - b);
      row.push(...levelObj[vkey][hkey]);
    }
    output.push(row);
  }
  return output;
};

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

// 110. Balance BT

var isBalanced = function (root) {
  const height = getHeightIfBalanced(root);
  return height !== -1;
};

var getHeightIfBalanced = function (root) {
  if (!root) return 0;

  let lh = getHeightIfBalanced(root.left);
  let rh = getHeightIfBalanced(root.right);

  if (Math.abs(lh - rh) > 1) return -1;
  if (lh == -1 || rh == -1) return -1;

  return 1 + Math.max(lh, rh);
};

// https://www.interviewbit.com/problems/path-to-given-node/
function getPath(root, val, output){
    if(!root) return false;
    output.push(root.data);

    if(root.data === val) return true;
    
    if(getPath(root.left, val, output) || getPath(root.right, val, output)) return true;

    output.pop();
    return false;
}