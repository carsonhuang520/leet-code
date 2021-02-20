// function reverseKGroup(head, k) {
//   let pre = null,
//     cur = head
//   let p = head
//   for (let i = 0; i < k; i++) {
//     if (p === null) {
//       return head
//     }
//     p = p.next
//   }
//   for (let i = 0; i < k; i++) {
//     let next = cur.next
//     cur.next = pre
//     pre = cur
//     cur = next
//   }
//   head.next = reverseKGroup(cur, k)
//   return pre
// }

function reverseKGroup(head, k) {
  const reverse = (a, b) => {
    let pre = null
    let cur = a
    while (cur !== b) {
      let next = cur.next
      cur.next = pre
      pre = cur
      cur = next
    }
    return pre
  }
  if (head === null) {
    return head
  }
  let a = head
  let b = head
  for (let i = 0; i < k; i++) {
    if (b === null) {
      return head
    }
    b = b.next
  }
  let newHead = reverse(a, b)
  a.next = reverseKGroup(b, k)
  return newHead
}
