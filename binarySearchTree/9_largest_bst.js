// https://practice.geeksforgeeks.org/problems/largest-bst/1/

function largestBst(root){
    //code here
    
    function getBstSize(root){
        if(!root){
            return {size:0,min:Infinity,max:-Infinity}
        }
        
        let left = getBstSize(root.left)
        let right = getBstSize(root.right)
        
        if(left.max < root.key && right.min > root.key){
            return {size:1+left.size+right.size,min:Math.min(left.min, root.key),max:Math.max(right.max, root.key)}
        }
        
        return {size:Math.max(left.size, right.size),min:-Infinity,max:Infinity}
    }
    
    return getBstSize(root).size
}