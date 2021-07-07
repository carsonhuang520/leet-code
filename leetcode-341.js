/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
  this.list = nestedList
}

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  while (this.list.length !== 0 && !this.list[0].isInteger()) {
    let item = this.list.shift().getList()
    for (let i = item.length - 1; i >= 0; i--) {
      this.list.unshift(item[i])
    }
  }
  return !this.list.length
}

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
  return this.list.shift().getInteger()
}

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

function flatten(nums) {
  let res = nums.reduce((prev, item) => {
    if (Array.isArray(item)) {
      prev = prev.concat(flatten(item))
    } else {
      prev.push(item)
    }
    return prev
  }, [])
  return res
}

console.log(flatten([1, [4, [6, [7, 8, [19, [45, 33]]]]]]))
