// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
var maxProfit = function(prices) {
    let leftMin = Infinity, profit = 0;
    for(let price of prices){
        leftMin = Math.min(leftMin, price);
        profit = Math.max(profit, price-leftMin)
    }
    return profit
};


// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
var maxProfit2 = function(prices) {
    let profit = 0;
    for(let i=1; i<prices.length; i++){
        if(prices[i] > prices[i-1]){
            profit+=(prices[i]-prices[i-1])
        }
    }
    return profit
};