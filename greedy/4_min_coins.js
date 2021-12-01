// https://www.youtube.com/watch?v=mVg9CfJvayM&list=PLgUwDviBIf0pmWCl2nepwGDO05a0-7EfJ&index=5 

// notes num - 11
minCoins(coins, M, V);
{
  let output = 0;
  for (let i = 0; i < coins.length; i++) {
    while (V >= coins[i]) {
      V -= coins[i];
      output++;
    }
  }
  return output === 0 ? -1 : output;
}

// memoization
// https://leetcode.com/problems/coin-change/
var coinChange = function(coins, amount) {
  const minCoins = findChange(coins, amount);
  return minCoins === Infinity ? -1 : minCoins
};

var findChange = function(coins, amount, memo = {}){
  if(amount < 0) return Infinity;
  if(amount === 0) return 0;
  
  if(amount in memo) return memo[amount]
  
  let minCoins = Infinity;
  for(let coin of coins){
      let coinSum=1+findChange(coins, amount-coin, memo)
      minCoins = Math.min(minCoins, coinSum)
  }
  memo[amount] = minCoins
  return memo[amount]
}