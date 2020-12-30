var subsetsWithDup = function (nums) {
  let res = []
  const backtrack = (track, start) => {
    res.push([...track])
    for (let i = start; i < nums.length; i++) {
      if (i !== start && nums[i] === nums[i - 1]) {
        continue
      }
      track.push(nums[i])
      backtrack(track, i + 1)
      track.pop()
    }
  }
  backtrack([], 0)
  return res
}

console.log(subsetsWithDup([1, 2, 2]))
