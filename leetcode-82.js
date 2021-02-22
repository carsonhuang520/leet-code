var deleteDuplicates = function (head) {
  if (head === null) {
    return null
  }
  let dummyHead = new ListNode(0)
  dummyHead.next = head
  let cur = dummyHead
  while (cur.next !== null && cur.next.next !== null) {
    if (cur.next.val === cur.next.next.val) {
      let temp = cur.next.val
      while (cur.next !== null && cur.next.val === temp) {
        cur.next = cur.next.next
      }
    } else {
      cur = cur.next
    }
  }
  return dummyHead.next
}
