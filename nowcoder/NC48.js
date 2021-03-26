/**
 *
 * @param A int整型一维数组
 * @param target int整型
 * @return int整型
 */
function search(A, target) {
  let left = 0
  let right = A.length - 1
  while (left + 1 < right) {
    let mid = left + Math.floor((right - left) / 2)
    if (A[mid] === target) {
      return mid
    }
    if (A[left] < A[mid]) {
      if (A[left] <= target && target <= A[mid]) {
        right = mid
      } else {
        left = mid
      }
    } else if (A[mid] < A[right]) {
      if (A[right] >= target && target >= A[mid]) {
        left = mid
      } else {
        right = mid
      }
    }
  }
  if (A[left] === target) {
    return left
  } else if (A[right] === target) {
    return right
  }
  return -1
}
module.exports = {
  search: search,
}
