var deleteDuplicates = function (head) {
  if (head === null) {
    return null
  }
  let p = head
  let q = head.next
  while (q !== null) {
    if (p.val !== q.val) {
      p = p.next
      q = q.next
    } else {
      p.next = q.next
      q = p.next
    }
  }
  return head
}
