/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let len = heights.length
  if (len === 0) {
    return 0
  }
  if (len === 1) {
    return heights[0]
  }
  heights.unshift(0)
  heights.push(0)
  len += 2
  let stack = [0]
  let max = 0
  for (let i = 1; i < len; i++) {
    while (heights[i] < heights[stack[stack.length - 1]]) {
      let height = heights[stack.pop()]
      let width = i - stack[stack.length - 1] - 1
      max = Math.max(max, width * height)
    }
    stack.push(i)
  }
  return max
}

// console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))
console.log(largestRectangleArea([0, 9]))
