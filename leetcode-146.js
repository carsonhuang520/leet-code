function ListNode(key, val) {
  this.key = key
  this.val = val
  this.pre = this.next = null
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity
  this.size = 0
  this.data = {}
  this.head = new ListNode()
  this.tail = new ListNode()
  this.head.next = this.tail
  this.tail.pre = this.head
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.data[key] !== undefined) {
    let node = this.data[key]
    this.removeNode(node)
    this.appendHead(node)
    return node.val
  }
  return -1
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let node
  if (this.data[key] !== undefined) {
    node = this.data[key]
    this.removeNode(node)
    node.val = value
  } else {
    node = new ListNode(key, value)
    this.data[key] = node
    if (this.capacity > this.size) {
      this.size++
    } else {
      key = this.removeTail()
      console.log(key)
      delete this.data[key]
    }
  }
  this.appendHead(node)
}

LRUCache.prototype.removeNode = function (node) {
  let pre = node.pre
  let next = node.next
  pre.next = next
  next.pre = pre
}

LRUCache.prototype.appendHead = function (node) {
  let next = this.head.next
  this.head.next = node
  node.next = next
  next.pre = node
  node.pre = this.head
}

LRUCache.prototype.removeTail = function () {
  console.log('re')
  let key = this.tail.pre.key
  this.removeNode(this.tail.pre)
  return key
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

function LRU(operators, k) {
  let lru = new LRUCache(k)
  let res = []
  for (let i = 0; i < operators.length; i++) {
    let flag = operators[i][0]
    if (flag === 1) {
      lru.put(operators[i][1], operators[i][2])
    } else {
      res.push(lru.get(operators[i][1]))
    }
  }
  return res
}

console.log(
  LRU(
    [
      [1, 1, 1],
      [1, 2, 2],
      [1, 3, 2],
      [2, 1],
      [1, 4, 4],
      [2, 2],
    ],
    3
  )
)

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.queue = []
  this.size = capacity
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const index = this.getIndex(key)
  if (index === -1) {
    return -1
  } else {
    const val = this.queue[index].value
    this.queue.splice(index, 1)
    this.queue.push({ key: key, value: val })
    return val
  }
}

LRUCache.prototype.getIndex = function (key) {
  for (let i = 0; i < this.queue.length; i++) {
    if (this.queue[i].key === key) {
      return i
    }
  }
  return -1
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const index = this.getIndex(key)
  if (index === -1) {
    if (this.queue.length >= this.size) {
      this.queue.shift()
      this.queue.push({ key, value })
    } else {
      this.queue.push({ key, value })
    }
  } else {
    this.queue.splice(index, 1)
    this.queue.push({ key, value })
  }
  console.log(this.queue)
}

//  Your LRUCache object will be instantiated and called as such:
var obj = new LRUCache(2)
obj.put(1, 1)
obj.put(2, 2)
obj.get(1)
obj.put(3, 3)
obj.get(2)
obj.put(4, 4)
obj.put(4, 5)
obj.get(1)
obj.get(3)
obj.get(4)
