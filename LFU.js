function Node(k) {
  this.key = k
  this.next = null
  this.prev = null
}

function DoubleList() {
  this.head = new Node(0)
  this.tail = new Node(0)
  this.head.next = this.tail
  this.tail.prev = this.head
  this.size = 0
}

DoubleList.prototype.remove = function (k) {}

DoubleList.prototype.removeFirst = function () {}

DoubleList.prototype.addLast = function (k) {}

DoubleList.prototype.getSize = function () {
  return this.size
}

function LFUCache(capacity) {
  this.keyToVal = new Map()
  this.keyToFreq = new Map()
  this.freqToKeys = new Map()
  this.cap = capacity
  this.minFreq = 0
}

LFUCache.prototype.get = function (key) {}

LFUCache.prototype.put = function (key, val) {}

LFUCache.prototype.removeMinFreqKey = function () {}

LFUCache.prototype.increaseFreq = function (key) {}
