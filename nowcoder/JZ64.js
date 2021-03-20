// function maxInWindows(num, size) {
//   if (size === 0) {
//     return []
//   }
//   let len = num.length
//   let start = 0
//   let end = start + size - 1
//   const helper = (start, end) => {
//     let max = -Infinity
//     for (let i = start; i <= end; i++) {
//       max = Math.max(num[i], max)
//     }
//     return max
//   }
//   let res = []
//   while (end < len) {
//     let max = helper(start, end)
//     res.push(max)
//     end++
//     start++
//   }
//   return res
// }
/**
 * 使用队列来保持第一个元素为窗口中的最大值
 */
function maxInWindows(num, size) {
  if (size === 0 || num.length === 0) {
    return []
  }
  let queue = []
  let res = []
  for (let j = 0, i = 1 - size; j < num.length; i++, j++) {
    if (i > 0 && num[i - 1] === queue[0]) {
      queue.shift()
    }
    while (queue.length && queue[queue.length - 1] < num[j]) {
      queue.pop()
    }
    queue.push(num[j])
    if (i >= 0) {
      res[i] = queue[0]
    }
  }
  return res
}
console.log(maxInWindows([2, 3, 4, 2, 6, 2, 5, 1], 3))
module.exports = {
  maxInWindows: maxInWindows,
}
