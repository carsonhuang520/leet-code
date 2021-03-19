function GetNumberOfK(data, k) {
  let left = left_bound(data, k)
  let right = right_bound(data, k)
  return left === -1 ? 0 : right - left + 1
}
function left_bound(data, k) {
  let left = 0
  let right = data.length - 1
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (data[mid] > k) {
      right = mid - 1
    } else if (data[mid] < k) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  if (left >= data.length || data[left] !== k) {
    return -1
  }
  return left
}
function right_bound(data, k) {
  let left = 0
  let right = data.length - 1
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (data[mid] > k) {
      right = mid - 1
    } else if (data[mid] < k) {
      left = mid + 1
    } else {
      left = mid + 1
    }
  }
  if (right < 0 || data[right] !== k) {
    return -1
  }
  return right
}
console.log(GetNumberOfK([1, 2, 3, 3, 3, 4, 5], 3))
module.exports = {
  GetNumberOfK: GetNumberOfK,
}
