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
      // console.log(key)
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
  let key = this.tail.pre.key
  this.removeNode(this.tail.pre)
  return key
}

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

// function LRU(operators, k) {
//   var map = new Map()
//   // var list = []
//   var res = []
//   for (var item in operators) {
//     var op = operators[item][0]
//     if (op === 1) {
//       let key = operators[item][1]
//       let value = operators[item][2]
//       if (map.size >= k) {
//         map.delete(map.keys().next().value)
//         map.set(key, value)
//       } else {
//         if (map.has(key)) {
//           map.delete(key)
//         }
//         map.set(key, value)
//       }
//       // map.set(operators[item][1], operators[item][2])
//       // if (list.length >= k) {
//       //   list.shift()
//       // }
//       // list.push(operators[item][1])
//     } else if (op === 2) {
//       var key = operators[item][1]
//       // var index = list.indexOf(key)
//       if (!map.has(key)) {
//         res.push(-1)
//       } else {
//         let value = map.get(key)
//         res.push(value)
//         map.delete(key)
//         map.set(key, value)
//         // list.splice(index, 1)
//         // list.push(key)
//       }
//     }
//   }
//   console.log(map.keys().next().value)
//   return res
// }
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
module.exports = {
  LRU: LRU,
}
