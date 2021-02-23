var insertionSortList = function (head) {
  if (head === null || head.next === null) {
    return head
  }
  let dummyHead = new ListNode(0)
  dummyHead.next = head
  let pre = head
  let cur = head.next
  let work = null
  while (cur !== null) {
    if (pre.val <= cur.val) {
      pre = cur
      cur = cur.next
      continue
    }
    work = cur
    pre.next = cur.next
    cur = cur.next
    let temp = dummyHead
    while (temp.next.val < work.val) {
      temp = temp.next
    }
    work.next = temp.next
    temp.next = work
  }
  return dummyHead.next
}
