var findMinArrowShots = function (points) {
  let m = points.length
  if (m < 2) {
    return m
  }
  points.sort((a, b) => a[1] - b[1])
  let total = 1
  let prev = points[0][1]
  for (let point of points) {
    if (point[0] > prev) {
      total++
      prev = point[1]
    }
  }
  return total
}
// var findMinArrowShots = function (points) {
//   let m = points.length
//   if (m < 2) {
//     return m
//   }
//   points.sort((a, b) => {
//     if (a[1] === b[1]) {
//       return a[0] - b[0]
//     } else {
//       return a[1] - b[1]
//     }
//   })
//   for (let i = 0; i < points.length - 1;) {
//     if (points[i][1] >= points[i + 1][0]) {
//       points.splice(i + 1, 1)
//     } else {
//       i++
//     }
//   }
//   return points.length
// }
console.log(findMinArrowShots([[1, 2], [4, 5], [1, 5]])) // 2
console.log(findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]])) // 2
console.log(findMinArrowShots([[1, 2], [3, 4], [5, 6], [7, 8]])) // 4
console.log(findMinArrowShots([[1, 2], [2, 3], [3, 4], [4, 5]])) // 2
console.log(findMinArrowShots([[2, 3], [2, 3]])) // 1