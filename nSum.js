// 两数之和
var twoSum = function (nums, start, target) {
  nums.sort((a, b) => a - b)
  let lo = start
  let hi = nums.length - 1
  let ans = []
  while (lo < hi) {
    let left = nums[lo]
    let right = nums[hi]
    if (target === left + right) {
      ans.push([left, right])
      while (lo < hi && right === nums[hi]) {
        hi--
      }
      while (lo < hi && left === nums[lo]) {
        lo++
      }
    } else if (target < left + right) {
      while (lo < hi && right === nums[hi]) {
        hi--
      }
    } else {
      while (lo < hi && left === nums[lo]) {
        lo++
      }
    }
  }
  return ans
}

// 三数之和
var threeSum = function (nums, start, target) {
  nums.sort((a, b) => a - b)
  let ans = []
  for (let i = start; i < nums.length; i++) {
    let newTarget = target - nums[i]
    let temp = twoSum(nums, i + 1, newTarget)
    ans = ans.concat(
      temp.map((item) => {
        item.push(nums[i])
        return item
      })
    )
    while (i < nums.length - 1 && nums[i + 1] === nums[i]) {
      i++
    }
  }
  return ans
}

// 四数之和
var fourSum = function (nums, start, target) {
  nums.sort((a, b) => a - b)
  let ans = []
  for (let i = start; i < nums.length; i++) {
    let newTarget = target - nums[i]
    let temp = threeSum(nums, i + 1, newTarget)
    ans = ans.concat(
      temp.map((item) => {
        item.push(nums[i])
        return item
      })
    )
    while (i < nums.length - 1 && nums[i + 1] === nums[i]) {
      i++
    }
  }
  return ans
}

// n数之和
var nSum = function (nums, n, start, target) {
  nums.sort((a, b) => a - b)
  let ans = []
  let length = nums.length
  if (length < n || n < 2) {
    return res
  }
  if (n === 2) {
    let lo = start
    let hi = nums.length - 1
    while (lo < hi) {
      let left = nums[lo]
      let right = nums[hi]
      if (target === left + right) {
        res.push([left, right])
        while (lo < hi && right === nums[hi]) {
          hi--
        }
        while (lo < hi && left === nums[lo]) {
          lo++
        }
      } else if (target < left + right) {
        while (lo < hi && right === nums[hi]) {
          hi--
        }
      } else {
        while (lo < hi && left === nums[lo]) {
          lo++
        }
      }
    }
  } else {
    for (let i = start; i < nums.length; i++) {
      let newTarget = target - nums[i]
      let temp = nSum(nums, i - 1, i + 1, newTarget)
      res = res.concat(
        temp.map((item) => {
          item.push(nums[i])
          return item
        })
      )
      while (i < nums.length - 1 && nums[i + 1] === nums[i]) {
        i++
      }
    }
  }
  return res
}
