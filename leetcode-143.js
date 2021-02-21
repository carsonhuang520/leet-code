var reorderList = function (head) {
  let dummyHead = new ListNode(0)
  dummyHead.next = head
  let fast = dummyHead
  let slow = dummyHead
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  let newStart = reverse(slow.next)
  slow.next = null
  let p = head
  let q = newStart
  while (q !== null) {
    let next = q.next
    q.next = p.next
    p.next = q
    p = q.next
    q = next
  }
  return dummyHead.next
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
