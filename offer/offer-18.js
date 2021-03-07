var deleteNode = function (head, val) {
  if (head === null) {
    return head
  }
  let dummyHead = new ListNode(0)
  dummyHead.next = head
  let pre = dummyHead
  while (pre !== null) {
    if (pre.next.val === val) {
      pre.next = pre.next.next
      break
    }
    pre = pre.next
  }
  return dummyHead.next
}
