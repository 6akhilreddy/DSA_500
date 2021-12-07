// https://leetcode.com/problems/rotate-image/
// https://www.youtube.com/watch?v=Y72QeX0Efxw&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=12

var rotate = function(matrix) {
    // transpose matrix
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<i; j++){
            swap(matrix, i, j)
        }
    }
    
    // reverse each row
    for(let i=0; i<matrix.length; i++){
        reverse(matrix, i)
    }
};

var swap = function(matrix, i, j){
    const temp = matrix[i][j];
    matrix[i][j] = matrix[j][i];
    matrix[j][i] = temp;
}

var reverse = function(matrix, row){
    let start = 0; let end = matrix[0].length-1
    while(start < end){
        const temp = matrix[row][start];
        matrix[row][start] = matrix[row][end];
        matrix[row][end] = temp
        start++;
        end--;
    }
}