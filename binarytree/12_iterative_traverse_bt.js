// 94. Binary Tree Inorder Traversal - leetcode

class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }

    addElementToBt(val){
        const newNode = new Node(val);
        if(!this.root) this.root = newNode;
        else{
            const queue = [];
            queue.push(this.root);
            while(queue.length !== 0){
                const temp = queue.shift();
                if(temp.left) queue.push(temp.left)
                else{
                    temp.left = newNode;
                    break;
                }
                if(temp.right) queue.push(temp.right)
                else{
                    temp.right = newNode;
                    break;
                }
            }
        }
    }

    inorderRecursive(root){
        if(!root) return null;
        this.inorderRecursive(root.left)
        console.log(root.val)
        this.inorderRecursive(root.right)
    }

    inorderIterative(root){
        if(!root) return null;
        const stack = [];
        let current = root;

        while(true){
            if(current !== null){
                stack.push(current)
                current = current.left
            }else if(stack.length > 0){
                const temp =  stack.pop();
                console.log(temp.val)
                current = temp.right;
            }else{
                break;
            }
        }
    }

    preOrderRecursive(root){
        if(!root) return null;
        console.log(root.val);
        this.preOrderRecursive(root.left)
        this.preOrderRecursive(root.right)
    }

    preOrderIterative(root){
        if(!root) return [];
        const stack = [];
        stack.push(root);
        while(stack.length !== 0){
            const temp = stack.pop();
            if(temp.right) stack.push(temp.right)
            if(temp.left) stack.push(temp.left)
            console.log(temp.val)
        }
    }

    postOrderRecursive(root){
        if(!root) return null;
        this.postOrderRecursive(root.left)
        this.postOrderRecursive(root.right)
        console.log(root.val);
    }

    postOrderIterative(root){
        
    }
}

const bt = new BinaryTree();
const arr = [1,2,3,4,5,6,7]
for(let val of arr){
    bt.addElementToBt(val)
}

// bt.inorderRecursive(bt.root);
// console.log('----')
// bt.inorderIterative(bt.root);

// bt.preOrderRecursive(bt.root)
bt.preOrderIterative(bt.root)
// bt.postOrderRecursive(bt.root)