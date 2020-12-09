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
    console.log('-----enqueue-----', e, this.getFront())
    if (this.getSize() === this.max) {
      if (this.compare(e, this.getFront())) {
        console.log('~~~~~~~~~~~')
        return
      }
      this.dequeue()
    }
    this.maxHeap.add(e)
    console.log('-----heap-----', this.maxHeap.data)
  }
  dequeue() {
    if (this.getSize() === 0) {
      return null
    }
    return this.maxHeap.extractMax()
  }
}

var topKFrequent = function (nums, k) {
  let map = {}
  let pq = new PriorityQueue(k, (a, b) => map[a] - map[b] < 0)
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 0
    }
    map[nums[i]]++
  }
  console.log('-----map-----', map)
  let arr = Array.from(new Set(nums))
  console.log('-----arr-----', arr)
  for (let i = 0; i < arr.length; i++) {
    pq.enqueue(arr[i])
  }
  return pq.maxHeap.data
}

console.log(
  topKFrequent(
    [5, -3, 9, 1, 7, 7, 9, 10, 2, 2, 10, 10, 3, -1, 3, 7, -9, -1, 3, 3],
    3
  )
)

// const arr = [1, 2, 4, 1, 3, 2, 3, 1, 2, 1]
// let pq = new PriorityQueue(3, (a, b) => a - b < 0)
// for (let i = 0; i < arr.length; i++) {
//   pq.enqueue(arr[i])
// }

// console.log(pq.maxHeap.data)

// let pq = new PriorityQueue(3, (a, b) => a - b < 0)
// pq.enqueue(5)
// pq.enqueue(-3)
// pq.enqueue(-7)
// console.log(pq.dequeue())
// console.log(pq.dequeue())
// console.log(pq.dequeue())
// pq.enqueue(3)
// pq.enqueue(6)
// pq.enqueue(62)
// console.log(pq.dequeue())
// console.log(pq.dequeue())
// console.log(pq.dequeue())
