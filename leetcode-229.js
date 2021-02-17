var majorityElement = function (nums) {
  let cand1 = 0
  let cand2 = 0
  let cnt1 = 0
  let cnt2 = 0
  let res = []
  for (let num of nums) {
    if (num === cand1) {
      cnt1++
      continue
    }
    if (num === cand2) {
      cnt2++
      continue
    }
    if (cnt1 === 0) {
      cand1 = num
      cnt1++
      continue
    }
    if (cnt2 === 0) {
      cand2 = num
      cnt2++
      continue
    }
    cnt1--
    cnt2--
  }
  cnt1 = 0
  cnt2 = 0
  for (let num of nums) {
    if (num === cand1) {
      cnt1++
    } else if (num === cand2) {
      cnt2++
    }
  }
  let len = nums.length
  if (cnt1 > Math.floor(len / 3)) {
    res.push(cand1)
  }
  if (cnt2 > Math.floor(len / 3)) {
    res.push(cand2)
  }
  return res
}

console.log(majorityElement([1, 1, 1, 3, 3, 2, 2, 2]))
