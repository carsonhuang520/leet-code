let reverseList = (head) => {
  let reverse = (pre, cur) => {
    if (!cur) {
      return pre
    }
    let next = cur.next
    cur.next = pre
    return reverse(cur, next)
  }
  return reverse(null, head)
}

let reverseII = (head, m, n) => {
  if (head === null || m === n) {
    return head
  }
  let dummy = new ListNode(0)
  dummy.next = head
  let count = 0
  let before = null
  let start = null
  let end = null
  let after = null
  let temp = dummy.next
  while (temp !== null) {
    count++
    if (count === m - 1) {
      before = temp
    } else if (count === m) {
      start = temp
    } else if (count === n) {
      end = temp
    } else if (count === n + 1) {
      after = temp
    }
    temp = temp.next
  }
  if (start === null || end === null) {
    return
  }
  end.next = null
  let s = start
  end = reverse(s)
  if (before !== null) {
    before.next = end
  } else {
    dummy.next = end
  }
  start.next = after
  return dummy.next
}

// 递归操作
let successor = null
function reverseN(head, n) {
  if (n === 1) {
    successor = head.next
    return head
  }
  let last = reverseN(head.next, n - 1)
  head.next.next = head
  head.next = successor
  return last
}

var reverseBetween = (head, m, n) => {
  if (m === 1) {
    return reverseN(head, n)
  }
  head.next = reverseBetween(head, m - 1, n - 1)
  return head
}
