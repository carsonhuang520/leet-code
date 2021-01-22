// var eraseOverlapIntervals = function (intervals) {
//   intervals.sort((a, b) => {
//     if (a[0] !== b[0]) {
//       return b[0] - a[0]
//     } else {
//       return a[1] - b[1]
//     }
//   })
//   let len = intervals.length
//   for (let i = 0; i < intervals.length - 1;) {
//     if (intervals[i][0] < intervals[i + 1][1]) {
//       intervals.splice(i + 1, 1)
//     } else {
//       i++
//     }
//   }
//   return len - intervals.length
// }

var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1])
  let len = intervals.length
  let total = 0
  let prev = intervals[0][1]
  for (let i = 1; i < len; i++) {
    if (intervals[i][0] < prev) {
      total++
    } else {
      prev = intervals[i][1]
    }
  }
  return total
}

console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]))
console.log(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]]))
console.log(eraseOverlapIntervals([[1, 2], [2, 3]]))