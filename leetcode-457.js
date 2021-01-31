var circularArrayLoop = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    while (temp !== i) {
      if (nums[temp] > 0) {
        temp = (nums[temp] + temp) % nums.length
      } else {
        return false
      }
    }
  }
}

console.log(circularArrayLoop())
