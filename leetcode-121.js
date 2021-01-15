// var maxProfit = function (prices) {
//   let m = prices.length
//   let res = 0
//   let min = Number.POSITIVE_INFINITY
//   for(let i = 0; i < m; i++) {
//     min = Math.min(min, prices[i])
//     res = Math.max(res, prices[i] - min)
//   }
//   return res
// }

var maxProfit = function (prices) {
  let m = prices.length
  if (m === 0) {
    return 0
  }
  let dp_i_0 = 0
  let dp_i_1 = Number.NEGATIVE_INFINITY
  for (let i = 0; i < m; i++) {
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
    dp_i_1 = Math.max(dp_i_1, - prices[i])
  }
  return dp_i_0
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))