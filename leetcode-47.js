var permuteUnique = function (nums) {
  let res = []
  let used = new Array(nums.length)
  nums.sort((a, b) => a - b)
  const backtrack = (track) => {
    if (track.length === nums.length) {
      res.push(track.slice())
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (i - 1 >= 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
        continue
      }
      if (used[i]) {
        continue
      }
      track.push(nums[i])
      used[i] = true
      backtrack(track, i)
      track.pop()
      used[i] = false
    }
  }
  backtrack([])
  return res
}

console.log(permuteUnique([3, 3, 0, 3]))
