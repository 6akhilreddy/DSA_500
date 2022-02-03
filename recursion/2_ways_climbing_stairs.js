/* n=10, possibleSteps = [2,4,5,8], output = 11 */

function getNumberOfWays(n, possibleSteps, memo={}){
    if(n === 0) return 1;
    if(n < 0) return 0;
    if(n in memo) return memo[n];
    let count = 0;
    for(let step of possibleSteps){
        count+=getNumberOfWays(n-step, possibleSteps, memo);
    }
    memo[n] = count;
    return memo[n];
}

function dpNumberOfWays(n, possibleSteps){
    const dp = new Array(n+1).fill(0);
    dp[0] = 1;
    for(let i=1; i<dp.length; i++){
        let temp = 0;
        for(let step of possibleSteps){
            if(i-step >= 0){
                temp += dp[i-step]
            }
        }
        dp[i] = temp
    }
    return dp[n]
}

console.log(getNumberOfWays(10, [2,4,5,8]));
console.log(dpNumberOfWays(10, [2,4,5,8]));