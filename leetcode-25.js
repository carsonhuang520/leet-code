function reverseKGroup(head, k) {
  let pre = null,
    cur = head
  let p = head
  for (let i = 0; i < k; i++) {
    if (p === null) {
      return head
    }
    p = p.next
  }
  for (let i = 0; i < k; i++) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  head.next = reverseKGroup(cur, k)
  return pre
}
