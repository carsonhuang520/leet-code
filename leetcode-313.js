/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
  let heap = new PriorityQueue(n, (a, b) => a - b > 0)
  heap.enqueue(1)
  let index = 0
  for (let i = 1; i < n; i++) {
    let top = heap.getFront()
    let temp = top * primes[index]
    if (temp > primes[index + 1]) {
      heap.enqueue(primes[index])
    } else {
      heap.enqueue(temp)
    }
  }
}

class MaxHeap {
  constructor(arr, compare = null) {
    this.data = arr
    this.size = this.data.length
    this.compare = compare
  }
  getSize() {
    return this.size
  }
  isEmpty() {
    return this.size === 0
  }
  findMax() {
    if (this.size === 0) {
      return
    }
    return this.data[0]
  }
  add(value) {
    this.data.push(value)
    this.size++
    this._siftUp(this.getSize() - 1)
  }
  extractMax() {
    let max = this.findMax()
    this._swap(0, this.getSize() - 1)
    this.data.pop()
    this.size--
    this._siftDown(0)
    return max
  }
  _parent(index) {
    return Math.floor((index - 1) / 2)
  }
  _swap(i, j) {
    ;[this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }
  _compare(a, b) {
    return a > b
  }
  _leftChild(index) {
    return 2 * index + 1
  }
  _rightChild(index) {
    return 2 * index + 2
  }
  _siftUp(index) {
    while (
      index > 0 &&
      this.compare(this.data[index], this.data[this._parent(index)])
    ) {
      this._swap(index, this._parent(index))
      index = this._parent(index)
    }
  }
  _siftDown(k) {
    while (this._leftChild(k) < this.getSize()) {
      let j = this._leftChild(k)
      if (
        this._rightChild(k) < this.getSize() &&
        this.compare(this.data[this._rightChild(k)], this.data[j])
      ) {
        j++
      }
      if (this.compare(this.data[k], this.data[j])) {
        return
      }
      this._swap(k, j)
      k = j
    }
  }
}

class PriorityQueue {
  constructor(max, compare) {
    this.max = max
    this.compare = compare
    this.maxHeap = new MaxHeap([], compare)
  }
  getSize() {
    return this.maxHeap.getSize()
  }
  isEmpty() {
    return this.maxHeap.isEmpty()
  }
  getFront() {
    return this.maxHeap.findMax()
  }
  enqueue(e) {
    if (this.getSize() === this.max) {
      if (this.compare(e, this.getFront())) {
        return
      }
      this.dequeue()
    }
    this.maxHeap.add(e)
  }
  dequeue() {
    if (this.getSize() === 0) {
      return null
    }
    return this.maxHeap.extractMax()
  }
}
