class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Bst {
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

const bst = new Bst();
const arr = [10,5,13,3,7,11,14,2,4,6,9];
arr.forEach((val) => {
    bst.insert(val);
});

function bstCeil(root, val){
    let ceil = null; 
    // let floor = null;
    while(root){
        if(val === root.data) return val;
        else if(val > root.data){
            // floor = root.data;
            root = root.right;
        }else{
            ceil = root.data;
            root = root.left;
        }
    }
    return ceil
}

console.log(bstCeil(bst.root, 12))
