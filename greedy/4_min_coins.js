// https://www.youtube.com/watch?v=mVg9CfJvayM&list=PLgUwDviBIf0pmWCl2nepwGDO05a0-7EfJ&index=5 
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
