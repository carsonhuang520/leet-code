var permute = (nums) => {
  let res = []
  const backtrack = (track, nums) => {
    if (track.length === nums.length) {
      res.push([...track])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (track.indexOf(nums[i]) !== -1) {
        continue
      }
      track.push(nums[i])
      backtrack(track, nums)
      track.pop()
    }
  }
  backtrack([], nums)
  return res
}

console.log(permute([1, 2, 3]))
