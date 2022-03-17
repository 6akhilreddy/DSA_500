class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Bst{
    constructor(){
        this.root = null
    }

    insert(data){
        const node = new Node(data);
        if(!this.root){
            this.root = node;
        }else{
            this.insertNode(this.root, node)
        }
    }

    insertNode(root, node){
        if(root.data === node.data) throw Error("Equal value");
        else if(root.data < node.data){
            if(!root.left) root.left = node;
            else this.insertNode(root.left, node);
        }else{
            if(!root.right) root.right = node;
            else this.insertNode(root.right, node);
        }
    }


    inorder(root){
        if(!root) return;
        this.inorder(root.left);
        console.log(root.data);
        this.inorder(root.right);
    }
}

const arr = [50, 25, 75, 85, 65, 35, 15, 70, 10, 18, 40, 60, 98];

const bst = new Bst();

arr.forEach((val) => {
    bst.insert(val)
});

bst.inorder(bst.root)

// https://leetcode.com/problems/insert-into-a-binary-search-tree/

var insertIntoBST = function(root, val) {
    const node = new TreeNode(val);
    if(!root){
        root=node;
    }else{
        let temp = root;
        while(temp){
            if(val < temp.val){
                if(!temp.left){
                    temp.left = node;
                    break;
                }
                else temp = temp.left
            }else{
                if(!temp.right){
                    temp.right = node;
                    break;
                }
                else temp = temp.right
            }
        }
    }
    return root
};