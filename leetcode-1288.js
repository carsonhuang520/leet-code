/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
  if (intervals.length === 0) {
    return 0
  }
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    } else {
      return a[0] - b[0]
    }
  })
  let count = 0
  let x_start = intervals[0][0]
  let x_end = intervals[0][1]
  for (let i = 1; i < intervals.length; i++) {
    let start = intervals[i][0]
    let end = intervals[i][1]
    if (x_start >= start && x_end <= end) {
      count++
      x_start = start
      x_end = end
    } else if (x_start <= start && x_end >= end) {
      count++
    } else {
      x_start = start
      x_end = end
    }
  }
  return intervals.length - count
}

console.log(
  removeCoveredIntervals([
    [1, 4],
    [1, 3],
    [3, 6],
    [2, 8],
  ])
)
