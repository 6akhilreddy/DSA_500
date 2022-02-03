// https://leetcode.com/problems/min-cost-climbing-stairs/

/* 
steps
1. need to take the min of jump from 0 and jump from 1
2. each time calculate the min of jump n+1 and jump n+2 and add to current cost
*/

var minCostClimbingStairs = function(cost) {
    let step1 = jump(0, cost);
    let step2 = jump(1, cost);
    return Math.min(step1, step2);
};

var jump = function(n, cost, memo = {}){
    if(n >= cost.length) return 0;
    if(n in memo) return memo[n];
    memo[n] = cost[n] + Math.min(jump(n+1, cost, memo), jump(n+2, cost, memo))
    return memo[n]
}