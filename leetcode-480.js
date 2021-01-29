var medianSlidingWindow = function (nums, k) {
  let left = 0
  let right = 0
  let res = []
  let window = []
  while (right < nums.length) {
    let c = nums[right]
    right++
    window.push(c)
    while (right - left >= k) {
      let temp = [...window]
      temp.sort((a, b) => a - b)
      if (k % 2 !== 0) {
        res.push(temp[Math.floor(temp.length / 2)])
      } else {
        let mid = Math.floor(temp.length / 2)
        let median = (temp[mid - 1] + temp[mid]) / 2
        res.push(median)
      }
      left++
      window.shift()
    }
  }
  return res
}

// console.log(medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
// console.log(medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 2))
console.log(medianSlidingWindow([1, 4, 2, 3], 4))
