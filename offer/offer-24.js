var reverseList = function (head) {
  if (head === null) {
    return null
  }
  let pre = null
  let cur = head
  while (cur !== null) {
    cur = cur.next
    head.next = pre
    pre = head
    head = cur
  }
  return pre
}
