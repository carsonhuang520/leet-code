/**
 * retrun the longest increasing subsequence
 * @param arr int整型一维数组 the array
 * @return int整型一维数组
 */
/* O(nlogn)解法 */
// function LIS2(arr) {
//   let tails = new Array(arr.length).fill(0)
//   let res = 0
//   for (let num of arr) {
//     let i = 0
//     let j = res
//     while (i < j) {
//       let m = Math.floor((i + j) / 2)
//       if (tails[m] < num) i = m + 1
//       else j = m
//     }
//     tails[i] = num
//     if (res === j) res++
//   }
//   console.log(tails.slice(0, res))
//   return res
// }
// function LIS(arr) {
//   let len = arr.length
//   if (len === 0) {
//     return []
//   }
//   let piles = 0
//   let top = new Array(len).fill(0)
//   for (let i = 0; i < len; i++) {
//     let poker = arr[i]
//     let left = 0
//     let right = piles
//     while (left < right) {
//       let mid = Math.floor((left + right) / 2)
//       if (top[mid] > poker) {
//         right = mid
//       } else if (top[mid] < poker) {
//         left = mid + 1
//       } else {
//         right = mid
//       }
//     }
//     if (left === piles) {
//       piles++
//     }
//     top[left] = poker
//   }
//   console.log(top)
//   // return max
// }
/*  */
// function LIS(arr) {
//   let v = [arr[0]]
//   let count = [1]
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > v[v.length - 1]) {
//       v.push(arr[i])
//       count.push(v.length)
//     } else {
//       let t = 0
//       for (let j = 0; j < v.length; j++) {
//         if (v[j] > arr[i]) {
//           t = j
//           break
//         }
//       }
//       v[t] = arr[i]
//       count.push(t + 1)
//     }
//   }
//   // let res = []
//   for (let i = arr.length - 1, j = v.length; j > 0; --i) {
//     if (count[i] === j) {
//       v[--j] = arr[i]
//     }
//   }
//   // console.log(v)
//   // console.log(count)
//   // return max
//   return v
// }
function LIS(arr) {
  let length = arr.length
  let end = new Array(length + 1)
  let dp = new Array(length)
  let n = 1
  end[1] = arr[0]
  dp[0] = 1
  for (let i = 0; i < length; i++) {
    if (end[n] < arr[i]) {
      end[++n] = arr[i]
      dp[i] = n
    } else {
      let left = 0
      let right = n
      while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (end[mid] >= arr[i]) {
          right = mid - 1
        } else {
          left = mid + 1
        }
      }
      end[left] = arr[i]
      dp[i] = left
    }
  }
  console.log(end)
  // console.log(dp)
  // console.log(n)
  let res = new Array(n)
  for (let i = length - 1; i >= 0; i--) {
    if (dp[i] === n) {
      res[--n] = arr[i]
    }
  }
  return res
}
console.log(LIS([2, 1, 5, 3, 6, 4, 8, 9, 7]))
// console.log(LIS([1, 2, 8, 6, 4]))
module.exports = {
  LIS: LIS,
}
