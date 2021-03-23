/**
 *
 * @param arr int整型一维数组 the array
 * @return int整型
 */
function maxLength(arr) {
  let start = 0
  let end = 0
  let res = 0
  const map = new Map()
  while (end < arr.length) {
    if (map.get(arr[end]) >= start) {
      start = map.get(arr[end]) + 1
      map.set(arr[end], end)
    } else {
      map.set(arr[end], end)
      res = Math.max(res, end - start + 1)
    }
    end++
  }
  return res
}
console.log(
  maxLength([
    2,
    3,
    4,
    5,
    5,
    6,
    6,
    7,
    8,
    9,
    9,
    10,
    10,
    11,
    12,
    13,
    14,
    15,
    15,
    15,
    10,
    11,
    12,
    13,
    14,
    15,
    15,
    15,
    10,
    11,
    12,
    13,
    14,
    15,
    15,
    15,
    10,
    11,
    12,
    13,
    14,
    15,
    15,
    15,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
  ])
)
module.exports = {
  maxLength: maxLength,
}
