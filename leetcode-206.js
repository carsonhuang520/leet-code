var reverseList = function (head) {
  let pre = null
  let cur = head
  while (cur !== null) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}
