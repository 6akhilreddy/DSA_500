// https://leetcode.com/problems/pascals-triangle/
// bruteforce

var generate = function(numRows) {
    const output = [];
    for(let i=1; i<= numRows; i++){
        const rowArr = [];
        for(let j=0; j<i; j++){
            if(j===0 || j===i-1){
                rowArr.push(1)
            }else{
                const outputLen = output.length;
                const lastEle = output[outputLen-1];
                rowArr.push(lastEle[j]+lastEle[j-1]);
            }
        }
        output.push(rowArr)
    }
    return output
};

