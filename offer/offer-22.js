var getKthFromEnd = function (head, k) {
  if (head === null) {
    return null
  }
  let dummyHead = new ListNode(0)
  dummyHead.next = head
  let slow = dummyHead
  let fast = dummyHead
  for (let i = 1; i <= k; i++) {
    fast = fast.next
  }
  while (fast !== null) {
    slow = slow.next
    fast = fast.next
  }
  return slow
}
