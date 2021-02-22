var removeElements = function (head, val) {
  if (head === null) {
    return null
  }
  let dummyHead = new ListNode(0)
  dummyHead.next = head
  let cur = dummyHead
  while (cur !== null && cur.next !== null) {
    if (cur.next.val === val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return dummyHead.next
}
