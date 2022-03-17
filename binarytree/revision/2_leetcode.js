// https://leetcode.com/problems/path-sum-ii/

var pathSum = function(root, targetSum) {
    const output = [];
    if(!root) return output;
    getPathSum(root, targetSum, output);
    return output;
};
    
var getPathSum = function(root, targetSum, output, temp=[]){
    if(!root) return
    temp.push(root.val);
    if(!root.left && !root.right && targetSum-root.val === 0){
        output.push([...temp]);
        temp.pop();
        return;
    }
    getPathSum(root.left, targetSum-root.val, output, temp);
    getPathSum(root.right, targetSum-root.val, output, temp);
    temp.pop()
}

// https://leetcode.com/problems/path-sum-iii/

var pathSum = function(root, targetSum) {
    if(!root) return 0;
    let numOfPaths = 0;
    getPaths(root, targetSum);
    
    function getPaths(root, targetSum){
        if(!root) return
        validatePath(root, targetSum);
        getPaths(root.left, targetSum)
        getPaths(root.right, targetSum)
    }
    
    function validatePath(root, targetSum){
        if(!root) return
        
        if(root.val === targetSum){
            numOfPaths+=1;
        }
        
        validatePath(root.left, targetSum-root.val);
        validatePath(root.right, targetSum-root.val);
    }
    
    return numOfPaths
    
};

// https://leetcode.com/problems/sum-of-left-leaves/

var sumOfLeftLeaves = function(root) {
    if(!root) return 0;
    let sum = 0;
    if(root.left){
        if(!root.left.left && !root.left.right) sum+=root.left.val;
        else sum+=sumOfLeftLeaves(root.left)
    }
    sum+=sumOfLeftLeaves(root.right)
    return sum
};