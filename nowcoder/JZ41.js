// function FindContinuousSequence(sum) {
//   if (sum < 3) {
//     return []
//   }
//   let mid = Math.floor((sum + 1) / 2)
//   let dp = new Array(mid + 1).fill(0)
//   for (let i = 1; i <= mid; i++) {
//     dp[i] = dp[i - 1] + i
//   }
//   let res = []
//   for (let i = 1; i <= mid; i++) {
//     for (let j = 0; j < i; j++) {
//       if (dp[i] - dp[j] === sum) {
//         let temp = []
//         let k = j + 1
//         while (k <= i) {
//           temp.push(k)
//           k++
//         }
//         res.push(temp)
//       }
//     }
//   }
//   return res
// }
/**
 * 滑动窗口
 */
function FindContinuousSequence(sum) {
  let res = []
  let left = 1
  let right = 2
  while (left < right) {
    let temp = ((left + right) * (right - left + 1)) / 2
    if (temp === sum) {
      let r = []
      for (let i = left; i <= right; i++) {
        r.push(i)
      }
      res.push(r)
      left++
    } else if (temp < sum) {
      right++
    } else {
      left++
    }
  }
  return res
}
console.log(FindContinuousSequence(9))
module.exports = {
  FindContinuousSequence: FindContinuousSequence,
}
