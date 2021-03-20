/**
 * @param {number} n
 * @return {number[]}
 */
var dicesProbability = function (n) {
  let res = new Array(5 * n + 1).fill(0)
  const helper = (origin, current, sum) => {
    if (current === 1) {
      res[sum - origin]++
    } else {
      for (let i = 1; i <= 6; i++) {
        helper(origin, current - 1, i + sum)
      }
    }
  }
  for (let i = 1; i <= 6; i++) {
    helper(n, n, i)
  }
  let temp = []
  let total = Math.pow(6, n)
  for (let i = 0; i <= res.length - 1; i++) {
    temp.push(res[i] / total)
  }
  console.log(temp)
}

console.log(dicesProbability(2))
