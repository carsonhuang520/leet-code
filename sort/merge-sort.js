function mergeSort(nums) {
  let len = nums.length
  if (len < 2) {
    return nums
  }
  let mid = Math.floor(len / 2)
  let left = nums.slice(0, mid)
  let right = nums.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right) {
  let res = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      res.push(right.shift())
    } else {
      res.push(left.shift())
    }
  }
  while (left.length) {
    res.push(left.shift())
  }
  while (right.length) {
    res.push(right.shift())
  }
  return res
}

console.log(mergeSort([2, 45, 6, 8, 56, 21, 34, 8, 9, 6, 16]))
