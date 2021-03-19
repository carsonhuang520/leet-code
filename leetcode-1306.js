/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
  if (arr[start] === 0) {
    return true
  }
  let queue = []
  let len = arr.length
  queue.push(start)
  let visited = new Array(len).fill(false)
  visited[start] = true
  while (queue.length) {
    let temp = queue.shift()
    let next = temp + arr[temp]
    let pre = temp - arr[temp]
    if (next <= len - 1 && visited[next] === false) {
      if (arr[next] === 0) {
        return true
      }
      queue.push(next)
      visited[next] = true
    }
    if (pre >= 0 && visited[pre] === false) {
      if (arr[pre] === 0) {
        return true
      }
      queue.push(pre)
      visited[pre] = true
    }
  }
  return false
}

console.log(
  canReach(
    [
      58,
      48,
      64,
      36,
      19,
      19,
      67,
      13,
      32,
      2,
      59,
      50,
      29,
      68,
      50,
      0,
      69,
      31,
      54,
      20,
      22,
      43,
      30,
      9,
      68,
      71,
      20,
      22,
      48,
      74,
      2,
      65,
      27,
      54,
      30,
      5,
      66,
      24,
      64,
      68,
      9,
      31,
      50,
      59,
      15,
      72,
      6,
      49,
      11,
      71,
      12,
      61,
      5,
      66,
      30,
      1,
      2,
      39,
      59,
      35,
      53,
      21,
      76,
      17,
      71,
      40,
      68,
      57,
      64,
      53,
      70,
      21,
      50,
      49,
      25,
      63,
      35,
    ],
    46
  )
)
