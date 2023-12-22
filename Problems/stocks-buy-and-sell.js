// The cost of a stock on each day is given in an array.
// Find the maximum profit that you can make by buying and selling on those days.
// If the given array of prices is sorted in decreasing order,
// then profit cannot be earned at all.

const arr = [100, 180, 260, 310, 40, 535, 695]

const stocksBuyAndSell = (arr) => {
  let finalProfit = 0
  let profit = 0
  let minima = arr[0]
  arr.forEach((ele, index) => {
      if (ele < minima) {
      finalProfit += profit
      minima = ele
    }
    if (profit < ele - minima) {
      profit = ele - minima
    }
  })
  finalProfit += profit
  console.log(finalProfit)
}


stocksBuyAndSell(arr)
