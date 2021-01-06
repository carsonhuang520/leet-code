// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  const helper = (left, right) => {
    if (left > right) {
      return
    }
    let mid = Math.floor((right + left) / 2)
    let root = new TreeNode(head[mid])
    root.left = helper(left, mid - 1)
    root.right = helper(mid + 1, right)
    return root
  }
  let root = helper(0, head.length - 1)
  return root
}

// console.log(sortedListToBST([-10, -3, 0, 5, 9]))

let head = new ListNode(1)
let p = head
for (let i = 2; i <= 7; i++) {
  let temp = new ListNode(i)
  p.next = temp
  p = temp
}

var getListMiddle = (head) => {
  let fast = head
  let slow = head
  let cur = null
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    cur = slow
    slow = slow.next
  }
  cur.next = null
  console.log(head)
  console.log(slow.next)
}

var sortedListToBST = function (head) {
  const getMiddle = (head) => {
    let fast = head
    let mid = head
    let cur = null
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next
      cur = mid
      mid = mid.next
    }
    if (cur) {
      cur.next = null
    } else {
      head = null
    }
    return [head, mid]
  }
  const helper = (head) => {
    if (head === null) {
      return null
    }
    let res = getMiddle(head)
    head = res[0]
    let mid = res[1]
    let root = new TreeNode(mid.val)
    root.left = helper(head)
    root.right = helper(mid.next)
    return root
  }
  let root = helper(head)
  return root
}

console.log(sortedListToBST(head))
// console.log(head)
