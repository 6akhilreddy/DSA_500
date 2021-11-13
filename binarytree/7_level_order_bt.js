// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

class Node{
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

    addElementToBt(val){
        if(this.root === null){
            this.root = new Node(val);
        }else{
            const queue = [];
            const newNode = new Node(val);
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

    levelOrderTraversal(root){
        if(!root) return [];
        const output = [];
        const queue = [];
        queue.push(root);
        while(queue.length !== 0){
            const queLen = queue.length;
            const tempArr = [];
            for(let i=0;i<queLen;i++){
                const temp = queue.shift();
                if(temp.left) queue.push(temp.left)
                if(temp.right) queue.push(temp.right)
                tempArr.push(temp.val)
            }
            output.push(tempArr)
        }
        return output
    }
}

const bt = new BinaryTree();
const arr = [1,2,3,4,5,6,7]
for(let val of arr){
    bt.addElementToBt(val)
}
console.log(bt.levelOrderTraversal(bt.root));