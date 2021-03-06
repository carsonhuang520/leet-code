/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let queue = []
  queue.push([n, 0])
  let visited = []
  visited[n] = true
  while (queue.length) {
    let front = queue.shift()
    let value = front[0]
    let level = front[1]
    if (value === 0) {
      return level
    }
    for (let i = 0; value - i * i >= 0; i++) {
      let temp = value - i * i
      if (temp === 0) {
        return level + 1
      }
      if (!visited[temp]) {
        queue.push([value - i * i, level + 1])
        visited[temp] = true
      }
    }
  }
}

// console.log(numSquares(12))

var numSquares2 = function (num) {
  if (num === 0) {
    return 0
  }
  let res = 0
  let queue = []
  let visited = []
  queue.push(num)
  visited[num] = true
  while (queue.length) {
    let len = queue.length
    for (let i = 0; i < len; i++) {
      let value = queue.shift()
      if (value === 0) {
        return res
      }
      for (let i = 0; value - i * i >= 0; i++) {
        let temp = value - i * i
        if (!visited[temp]) {
          queue.push(temp)
          visited[temp] = true
        }
      }
    }
    res++
  }
  return -1
}

// console.log(numSquares2(12))

// 动态规划
var numSquares3 = function (num) {
  if (num < 2) {
    return num
  }
  let dp = new Array(num + 1).fill(num + 1)
  dp[0] = 0
  dp[1] = 1
  for (let i = 2; i <= num; i++) {
    for (let j = 1; i - j * j >= 0; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
    }
  }
  return dp[num]
}

console.log(numSquares3(12))
