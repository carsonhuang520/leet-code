var MaxQueue = function () {
  this.queue = []
  this.max = []
}

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  if (this.queue.length === 0) {
    return -1
  }
  return this.max[0]
}

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
  while (this.max.length && this.max[this.max.length - 1] < value) {
    this.max.pop()
  }
  this.max.push(value)
  this.queue.push(value)
}

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
  if (this.queue.length === 0) {
    return -1
  }
  if (this.queue[0] === this.max[0]) {
    this.max.shift()
  }
  return this.queue.shift()
}

// Your MaxQueue object will be instantiated and called as such:
var obj = new MaxQueue()
obj.push_back(1)
obj.push_back(2)
console.log(obj)
console.log(obj.max_value())
console.log(obj.pop_front())
console.log(obj.max_value())
