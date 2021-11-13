class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }

    addToBt(val){
        const node = new Node(val);
        if(!this.root) this.root = node;
        else{
            const queue = [this.root];
            while(queue.length > 0){
                const current = queue.shift();
                if(current.left) queue.push(current.left)
                else{
                    current.left = node;
                    break;
                }
                if(current.right) queue.push(current.right)
                else{
                    current.right = node;
                    break;
                }
            }
        }
    }

    inorder(root){
        if(!root) return
        console.log(root.val)
        this.inorder(root.left)
        this.inorder(root.right)
    }

    boundaryTraversal(root){
        const isLeafNode = (node) => {
            return !node.left && !node.right
        }

        const leftBoundary  = (root, output) => {
            if(!root) return;
            if(isLeafNode(root)) return
            output.push(root.val);
            if(root.left) leftBoundary(root.left, output)
            else if(root.right) leftBoundary(root.right, output)
        }

        const leafNodes = (root, output) => {
            if(!root) return
            if(isLeafNode(root)) output.push(root.val)
            leafNodes(root.left, output)
            leafNodes(root.right, output)
        }

        const rightBoundary = (root, output, tempArr = []) => {
            if(!root) return;
            if(isLeafNode(root)) return;
            tempArr.push(root.val);
            if(root.right) leftBoundary(root.right, output)
            else if(root.left) leftBoundary(root.left, output)

            for(let i=tempArr.length-2; i>=0; i--){
                output.push(tempArr[i])
            }
        }

        const output = [];
        leftBoundary(root, output)
        leafNodes(root, output)
        rightBoundary(root, output)
        console.log(output)
    }
}

const arr = [1,2,3,4,5,6,7]
const bt = new BinaryTree()
for(let val of arr){
    bt.addToBt(val)
}
bt.boundaryTraversal(bt.root)