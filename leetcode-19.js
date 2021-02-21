var removeNthFromEnd = function (head, n) {
  if (head === null) {
    return null
  }
  let dummyHead = new ListNode(0)
  dummyHead.next = head
  let slow = dummyHead
  let fast = dummyHead
  for (let i = 0; i < n + 1; i++) {
    fast = fast.next
  }
  while (fast !== null) {
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow.next.next
  return dummyHead.next
}
