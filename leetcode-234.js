var isPalindrome = function (head) {
  let dummyHead = new ListNode(0)
  dummyHead.next = head
  let slow = dummyHead
  let fast = dummyHead
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }
  let next = slow.next
  slow.next = null
  let newStart = reverse(next)
  for (let p = head, q = newStart; q !== null; p = p.next, q = q.next) {
    if (p.val !== q.val) {
      return false
    }
  }
  return true
}

var reverse = function (head) {
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
