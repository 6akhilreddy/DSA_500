// https://leetcode.com/problems/excel-sheet-column-title/

// convert column number to the title

// divide and remainder pattern

var convertToTitle = function(code) {
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(code < 0) return 'enter valid code';
    if(code <= 26) return alphabets[code-1];
    
    let output = ''
    while(code > 0 ){
        const val = code%26;
        let index = 0
        if(val == 0){
            index = 26;
            code = Math.floor(code/26)-1
        }else{
            index = val;
            code = Math.floor(code/26)
        }
        output = alphabets[index-1]+output;
    }
    
    return output
};

// get the column number from title

// multiply with 26 on each position going backword

var titleToNumber = function(columnTitle) {
    const alphaObj = {};
    for(let i=1; i<=26; i++){
        alphaObj[String.fromCharCode(64+i)] = i
    }
    let mul = 1;
    let column = 0;
    for(let i=columnTitle.length-1; i>=0; i--){
        const val =  alphaObj[columnTitle[i]];
        column += val*mul;
        mul*=26
    }
    return column
};

// same logic but getting the values by subtracting from charCodeAt
var titleToNumber = function(columnTitle) {
    let column = 0;
    for(let str of columnTitle.split('')){
        column*=26;
        column+=str.charCodeAt(0)-'A'.charCodeAt(0)+1
    }
    return column
};