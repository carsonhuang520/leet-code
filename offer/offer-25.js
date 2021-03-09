var mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2
  }
  if (l2 === null) {
    return l1
  }
  let res = new ListNode(0)
  let cur = res
  while (l1 || l2) {
    if (l1.val > l2.val) {
      cur.next = l2
      cur = l2
      l2 = l2.next
    } else {
      cur.next = l1
      cur = l1
      l1 = l1.next
    }
    if (l1 === null) {
      cur.next = l2
      break
    }
    if (l2 === null) {
      cur.next = l1
      break
    }
  }
  return res.next
}
