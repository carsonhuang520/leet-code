var permute = function (nums) {
  let res = []
  let used = new Array(nums.length)
  const backtrack = (track) => {
    if (track.length === nums.length) {
      res.push([...track])
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue
      }
      track.push(nums[i])
      used[i] = true
      backtrack(track)
      track.pop()
      used[i] = false
    }
  }
  console.time()
  backtrack([])
  console.timeEnd()
  return res
}

console.log(permute([1, 2, 3]))

var permute2 = (nums) => {
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
  console.time()
  backtrack([], nums)
  console.timeEnd()
  return res
}

console.log(permute2([1, 2, 3]))
