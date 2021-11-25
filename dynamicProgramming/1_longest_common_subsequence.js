// https://leetcode.com/problems/longest-common-subsequence/
// https://www.youtube.com/watch?v=sSno9rV8Rhg
// https://www.youtube.com/watch?v=LAKWWDX3sGw
var longestCommonSubsequence = function(text1, text2) {
    return LCS(text1, text2, 0,0)
};

var LCS = function(txt1,txt2,i,j, memo={}){
    if(i>=txt1.length || j>=txt2.length) return 0;
    
    const pos = i+','+j;
    
    if(pos in memo) return memo[pos];
    
    if(txt1[i] === txt2[j]){
        memo[pos] = 1+LCS(txt1, txt2,i+1, j+1, memo);
    }
    else{
        memo[pos] = Math.max(LCS(txt1, txt2,i+1, j, memo), LCS(txt1, txt2,i, j+1, memo));
    }
    
    return memo[pos]
}

var LCS = function(txt1, txt2){
    const dp = new Array(txt1.length+1).fill().map(() => new Array(txt2.length+1).fill(-1));
    for(let i=0; i<=txt1.length; i++){
        for(let j=0; j<=txt2.length; j++){
            if(i==0 || j==0)  dp[i][j] = 0;
            
            else if(txt1[i-1] === txt2[j-1]) dp[i][j] = 1+dp[i-1][j-1]
            
            else dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j])
        }
    }
    return dp[txt1.length][txt2.length]
}


/* Longest repeating subsequence*/
// https://practice.geeksforgeeks.org/problems/longest-repeating-subsequence2004/1

// for longest repeating subsequence check the i and j on the same string and follow the LCS pattern also check for i!==j condition as mentioned in the question.

function LongestRepeatingSubsequence(str){
    //code here
    return LRS(str)
}

function LRS(str){
    const dp = Array(str.length+1).fill().map(() => Array(str.length+1));
    
    for(let i=0; i<=str.length; i++){
        for(let j=0; j<=str.length; j++){
            if(i===0 || j===0) dp[i][j] = 0;
            else if(str[i-1] === str[j-1] && i!==j) dp[i][j] = 1+dp[i-1][j-1];
            else dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j])
        }
    }
    
    return dp[str.length][str.length]
}