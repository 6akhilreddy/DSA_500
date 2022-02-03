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
            let node = root.left
            while(node){
                if(!isLeafNode(node)) output.push(node.data);
                if(node.left) node = node.left;
                else node = node.right
            }
        }

        const leafNodes = (root, output) => {
            if(isLeafNode(root)){
                output.push(root.data)
                return
            }
            if(root.left)leafNodes(root.left, output)
            if(root.right)leafNodes(root.right, output)
        }

        const rightBoundary = (root, output) => {
            let node = root.right
            const tempArr = [];
            while(node){
                if(!isLeafNode(node)) tempArr.push(node.data);
                if(node.right) node = node.right;
                else node = node.left
            }
            
            for(let i=tempArr.length-1; i>=0; i--){
                output.push(tempArr[i])
            }
        }

        const output = [];
        if(!isLeafNode(root)) output.push(root.data)
        leftBoundary(root, output)
        leafNodes(root, output)
        rightBoundary(root, output)
        return output
    }
}

const arr = [1,2,3,4,5,6,7]
const bt = new BinaryTree()
for(let val of arr){
    bt.addToBt(val)
}
bt.boundaryTraversal(bt.root)