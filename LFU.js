function Node(k) {
  this.key = k
  this.next = null
  this.prev = null
}

function DoubleList() {
  this.head = new Node(-1)
  this.tail = new Node(-1)
  this.head.next = this.tail
  this.tail.prev = this.head
  this.size = 0
}

DoubleList.prototype.remove = function (x) {
  // console.log('key----', x)
  if (typeof x === 'number') {
    // console.log('key----', x)
    for (let i = this.head; i !== this.tail; i = i.next) {
      // console.log(i)
      if (x === i.key) {
        x = i
        // console.log('x---', x)
        // console.log('i---', i)
        break
      }
    }
  }

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

DoubleList.prototype.addLast = function (x) {
  x.prev = this.tail.prev
  x.next = this.tail
  this.tail.prev.next = x
  this.tail.prev = x
  this.size++
}

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

LFUCache.prototype.get = function (key) {
  if (!this.keyToVal.has(key)) {
    return -1
  }
  this.increaseFreq(key)
  return this.keyToVal.get(key)
}

LFUCache.prototype.put = function (key, val) {
  if (this.cap <= 0) {
    return
  }

  if (this.keyToVal.has(key)) {
    this.keyToVal.set(key, val)
    this.increaseFreq(key)
    return
  }

  if (this.cap <= this.keyToVal.size) {
    // console.log('hhhhhhhhhhh')
    this.removeMinFreqKey()
  }

  this.keyToVal.set(key, val)
  this.keyToFreq.set(key, 1)
  if (!this.freqToKeys.get(1)) {
    this.freqToKeys.set(1, new DoubleList())
  }
  this.freqToKeys.get(1).addLast(new Node(key))
  this.minFreq = 1
}

LFUCache.prototype.removeMinFreqKey = function () {
  let keyList = this.freqToKeys.get(this.minFreq)
  let deletedKey = keyList.removeFirst()
  // console.log('deletedKey', deletedKey)
  if (keyList.size === 0) {
    this.freqToKeys.delete(this.minFreq)
  }
  this.keyToVal.delete(deletedKey.key)
  this.keyToFreq.delete(deletedKey.key)
}

LFUCache.prototype.increaseFreq = function (key) {
  let freq = this.keyToFreq.get(key)
  this.keyToFreq.set(key, freq + 1)
  this.freqToKeys.get(freq).remove(key)
  if (!this.freqToKeys.get(freq + 1)) {
    this.freqToKeys.set(freq + 1, new DoubleList())
  }
  this.freqToKeys.get(freq + 1).addLast(new Node(key))

  if (this.freqToKeys.get(freq).size === 0) {
    this.freqToKeys.delete(freq)
    if (freq === this.minFreq) {
      this.minFreq++
    }
  }
}

function print(lFUCache) {
  console.log('---keyToVal---', lFUCache.keyToVal)
  console.log('---keyToFreq---', lFUCache.keyToFreq)
  console.log('---freqToKeys start---')
  printSet(lFUCache.freqToKeys)
  console.log('---freqToKeys end---')
  console.log('----------------')
}

function printSet(freqToKeys) {
  for (let key of freqToKeys.keys()) {
    let list = freqToKeys.get(key)
    console.log('freq is ', key)
    for (let i = list.head; i !== null; i = i.next) {
      console.log(i.key)
    }
  }
}

let lFUCache = new LFUCache(2)
lFUCache.put(1, 1) // cache=[1,_], cnt(1)=1
// print(lFUCache)
lFUCache.put(2, 2) // cache=[2,1], cnt(2)=1, cnt(1)=1
// print(lFUCache)
console.log('---result---', lFUCache.get(1)) // 返回 1
// print(lFUCache)
// cache=[1,2], cnt(2)=1, cnt(1)=2
lFUCache.put(3, 3) // 去除键 2 ，因为 cnt(2)=1 ，使用计数最小
// print(lFUCache)
// cache=[3,1], cnt(3)=1, cnt(1)=2
console.log('---result---', lFUCache.get(2)) // 返回 -1（未找到）
console.log('---result---', lFUCache.get(3)) // 返回 3
// // cache=[3,1], cnt(3)=2, cnt(1)=2
lFUCache.put(4, 4) // 去除键 1 ，1 和 3 的 cnt 相同，但 1 最久未使用
// // cache=[4,3], cnt(4)=1, cnt(3)=2
console.log('---result---', lFUCache.get(1)) // 返回 -1（未找到）
console.log('---result---', lFUCache.get(3)) // 返回 3
// // cache=[3,4], cnt(4)=1, cnt(3)=3
console.log('---result---', lFUCache.get(4)) // 返回 4
// // cache=[3,4], cnt(4)=2, cnt(3)=3
