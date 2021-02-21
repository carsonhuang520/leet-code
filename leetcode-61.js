var rotateRight = function (head, k) {
  if (head === null) {
    return null
  }
  let len = 0
  let cur = head
  while (cur !== null) {
    cur = cur.next
    len++
  }
  k = k % len
  let dummyHead = new ListNode(0)
  dummyHead.next = head
  let fast = dummyHead
  let slow = dummyHead
  for (let i = 0; i < k + 1; i++) {
    fast = fast.next
  }
  while (fast !== null) {
    slow = slow.next
    fast = fast.next
  }
  let next = slow.next
  slow.next = null
  dummyHead.next = next
  while (next.next !== null) {
    next = next.next
  }
  next.next = head
  return dummyHead.next
}
