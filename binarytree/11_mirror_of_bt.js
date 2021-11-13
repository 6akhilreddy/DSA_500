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

    mirrorify(root){
        if(!root) return null;
        const mirror = new Node(root.val);
        mirror.left = this.mirrorify(root.right)
        mirror.right = this.mirrorify(root.left)
        return mirror
    }

    inorderTraversal(root){
        if(!root) return null;
        this.inorderTraversal(root.left);
        console.log(root.val);
        this.inorderTraversal(root.right);
    }

}

const bt = new BinaryTree();
const arr = [5,3,6,2,4]
for(let val of arr){
    bt.addElementToBt(val)
}
bt.inorderTraversal(bt.root)
console.log('-------')
const mirror = bt.mirrorify(bt.root)
bt.inorderTraversal(mirror)
