/**
 *
 * @param prices int整型一维数组
 * @return int整型
 */
function maxProfit(prices) {
  let len = prices.length
  if (len === 0) {
    return 0
  }
  let min = Infinity
  let res = -Infinity
  for (let i = 0; i < len; i++) {
    min = Math.min(min, prices[i])
    res = Math.max(res, prices[i] - min)
  }
  return res
}
console.log(maxProfit([1, 4, 2]))
module.exports = {
  maxProfit: maxProfit,
}
