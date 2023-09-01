// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=study-plan-v2&envId=top-interview-150

// poor solution

var maxProfit = function (prices) {
  var maxProfit = 0

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] > prices[i]) {
        if (prices[j] - prices[i] > maxProfit) {
          maxProfit = prices[j] - prices[i]
        }
      }
    }
  }

  return maxProfit
}


// Better Solution
var maxProfit = function (prices) {
  let left = 0
  let right = 1
  let maxProfit = 0
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      maxProfit = Math.max(prices[right] - prices[left], maxProfit)
    } else {
      left = right
    }
    right++
  }

  return maxProfit
}
