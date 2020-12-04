function swapPairs(head) {
  if (head === null || head.next === null) {
    return head
  }
  let dummy = new ListNode(0)
  let p = dummy
  dummy.next = head
  let node1 = null
  let node2 = null
  while ((node1 = p.next) && (node2 = p.next.next)) {
    node1.next = node2.next
    node2.next = node1
    p.next = node2
    p = node1
  }
  return dummy.next
}
