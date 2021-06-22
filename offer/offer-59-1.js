/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function MonotonicQueue() {
  this.queue = []
}

MonotonicQueue.prototype.pushItem = function (n) {
  while (this.queue.length && this.queue[this.queue.length - 1] < n) {
    this.queue.pop()
  }
  this.queue.push(n)
}

MonotonicQueue.prototype.max = function () {
  return this.queue[0]
}

MonotonicQueue.prototype.popItem = function (n) {
  if (this.queue[0] === n) {
    this.queue.shift()
  }
}

var maxSlidingWindow = function (nums, k) {
  let queue = new MonotonicQueue()
  let res = []
  for (let i = 0; i < nums.length; i++) {
    if (i < k - 1) {
      queue.pushItem(nums[i])
    } else {
      queue.pushItem(nums[i])
      res.push(queue.max())
      queue.popItem(nums[i - k + 1])
    }
  }
  return res
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
