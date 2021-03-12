// var MinStack = function () {}
var Stack = function () {
  this.stack = []
  this.minStack = []
}
Stack.prototype.push = function (node) {
  if (this.stack.length === 0) {
    this.stack.push(node)
    this.minStack.push(node)
  } else {
    if (node <= this.min()) {
      this.minStack.push(node)
    }
    this.stack.push(node)
  }
}
Stack.prototype.pop = function () {
  if (this.top() > this.min()) {
    this.stack.pop()
  } else {
    this.stack.pop()
    this.minStack.pop()
  }
}
Stack.prototype.top = function () {
  if (this.stack.length) {
    return this.stack[this.stack.length - 1]
  }
  return -1
}
Stack.prototype.min = function () {
  return this.minStack[this.minStack.length - 1]
}

var ttt = new Stack()
ttt.push(0)
ttt.push(1)
ttt.push(0)
console.log(ttt.stack)
console.log(ttt.minStack)
console.log(ttt.min())
ttt.pop()
// console.log(ttt.top())
console.log(ttt.min())

// module.exports = {
//   push: push,
//   pop: pop,
//   top: top,
//   min: min,
// }
