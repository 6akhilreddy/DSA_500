// https://www.interviewbit.com/problems/path-to-given-node/
function getPath(root, val, output){
    if(!root) return false;
    output.push(root.data);

    if(root.data === val) return true;
    
    if(getPath(root.left, val, output) || getPath(root.right, val, output)) return true;

    output.pop();
    return false;
}