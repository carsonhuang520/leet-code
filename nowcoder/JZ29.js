function GetLeastNumbers_Solution(input, k) {
  // write code here
  buildMaxHeap(input)
  let len = input.length
  for (let index = input.length - 1; index > 0; index--) {
    ;[input[0], input[index]] = [input[index], input[0]]
    len--
    heapify(input, 0, len)
  }
  return input
}
function buildMaxHeap(input) {
  for (let i = Math.floor(input.length / 2); i >= 0; i--) {
    heapify(input, i, input.length)
  }
}
function heapify(input, index, len) {
  let left = 2 * index + 1
  let right = 2 * index + 2
  let large = index
  if (left < len && input[left] > input[large]) {
    large = left
  }
  if (right < len && input[right] > input[large]) {
    large = right
  }
  if (large !== index) {
    ;[input[index], input[large]] = [input[large], input[index]]
    heapify(input, large, len)
  }
}
console.log(GetLeastNumbers_Solution([4, 5, 1, 6, 2, 7, 3, 8]))
module.exports = {
  GetLeastNumbers_Solution: GetLeastNumbers_Solution,
}
