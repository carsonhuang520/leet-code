var partition = function (head, x) {
  if (head === null || head.next === null) {
    return head
  }
  let dummyHead = new ListNode(0)
  dummyHead.next = head
  let cur = head
  let min = head.val < x ? head : dummyHead
  while (cur !== null && cur.next !== null) {
    let next = cur.next
    if (cur.val >= x && next.val < x) {
      let minNext = min.next
      let newCur = next.next
      cur.next = newCur
      min.next = next
      next.next = minNext
      min = next
    } else {
      if (cur.val < x && next.val < x) {
        min = min.next
      }
      cur = cur.next
    }
  }
  return dummyHead.next
}
