function Node(k, v) {
  this.key = k
  this.val = v
  this.next = null
  this.prev = null
}

function DoubleList() {
  this.head = new Node(0, 0)
  this.tail = new Node(0, 0)
  this.head.next = this.tail
  this.tail.prev = this.head
  this.size = 0
}

DoubleList.prototype.addLast = function (x) {
  x.prev = this.tail.prev
  x.next = this.tail
  this.tail.prev.next = x
  this.tail.prev = x
  this.size++
}

DoubleList.prototype.remove = function (x) {
  x.prev.next = x.next
  x.next.prev = x.prev
  this.size--
}

DoubleList.prototype.removeFirst = function () {
  if (this.head.next === this.tail) {
    return null
  }
  let first = this.head.next
  this.remove(first)
  return first
}

DoubleList.prototype.getSize = function () {
  return this.size
}

function LRUCache(capacity) {
  this.cap = capacity
  this.map = new Map()
  this.cache = new DoubleList()
}

LRUCache.prototype.makeRecently = function (key) {
  let node = this.map.get(key)
  this.cache.remove(node)
  this.cache.addLast(node)
}

LRUCache.prototype.addRecently = function (key, val) {
  let node = new Node(key, val)
  this.cache.addLast(node)
  this.map.set(key, node)
}

LRUCache.prototype.deleteKey = function (key) {
  let node = this.map.get(key)
  this.cache.remove(node)
  this.map.delete(key)
}

LRUCache.prototype.removeLeastRecently = function () {
  let node = this.cache.removeFirst()
  this.map.delete(node.key)
}

LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) {
    return -1
  }
  this.makeRecently(key)
  return this.map.get(key).val
}

LRUCache.prototype.put = function (key, val) {
  if (this.map.has(key)) {
    this.deleteKey(key)
    this.addRecently(key, val)
    return
  }

  if (this.cap === this.cache.getSize()) {
    this.removeLeastRecently()
  }

  this.addRecently(key, val)
}

let lRUCache = new LRUCache(2)
lRUCache.put(1, 1) // 缓存是 {1=1}
lRUCache.put(2, 2) // 缓存是 {1=1, 2=2}
console.log(lRUCache.get(1)) // 返回 1
lRUCache.put(3, 3) // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
console.log(lRUCache.get(2)) // 返回 -1 (未找到)
lRUCache.put(4, 4) // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
console.log(lRUCache.get(1)) // 返回 -1 (未找到)
console.log(lRUCache.get(3)) // 返回 3
console.log(lRUCache.get(4)) // 返回 4
