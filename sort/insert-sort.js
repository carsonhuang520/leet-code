function insert(nums) {
  let res = []
  res.push(nums[0])
  let len = nums.length
  for (let i = 1; i < len; i++) {
    let A = nums[i]
    for (let j = res.length - 1; j >= 0; j--) {
      let B = res[j]
      if (A > B) {
        res.splice(j + 1, 0, A)
        break
      }
      if (j === 0) {
        res.unshift(A)
      }
    }
  }
  return res
}

console.log(insert([12, 8, 24, 16, 1]))
