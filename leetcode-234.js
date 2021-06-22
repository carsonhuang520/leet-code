// var isPalindrome = function (head) {
//   let dummyHead = new ListNode(0)
//   dummyHead.next = head
//   let slow = dummyHead
//   let fast = dummyHead
//   while (fast && fast.next) {
//     fast = fast.next.next
//     slow = slow.next
//   }
//   let next = slow.next
//   slow.next = null
//   let newStart = reverse(next)
//   for (let p = head, q = newStart; q !== null; p = p.next, q = q.next) {
//     if (p.val !== q.val) {
//       return false
//     }
//   }
//   return true
// }

// var reverse = function (head) {
//   let pre = null
//   let cur = head
//   while (cur !== null) {
//     let next = cur.next
//     cur.next = pre
//     pre = cur
//     cur = next
//   }
//   return pre
// }

// 方法二
var isPalindrome = function (head) {
  let slow = head,
    fast = head
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  if (fast !== null) {
    slow = slow.next
  }
  let left = head
  let right = reverse(slow)
  while (right !== null) {
    if (left.val !== right.val) {
      return false
    }
    left = left.next
    right = right.next
  }
  return true
}

function reverse(head) {
  let pre = null
  let cur = head
  while (cur !== null) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}

// 方法三
var isPalindrome = function (head) {
  let left = head
  var traverse = (right) => {
    if (right === null) {
      return true
    }
    let res = traverse(right.next)
    res = res && left.val === right.val
    left = left.next
    return res
  }
  return traverse(head)
}
