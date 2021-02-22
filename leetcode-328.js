// var oddEvenList = function (head) {
//   let count = 1
//   let p = head
//   let odd = null
//   let even = null
//   let newHead = null
//   let evenHead = null
//   while (p !== null) {
//     if (count % 2 === 0) {
//       if (!even) {
//         even = p
//         evenHead = even
//       } else {
//         even.next = p
//         even = even.next
//       }
//     } else {
//       if (!odd) {
//         odd = p
//         newHead = odd
//       } else {
//         odd.next = p
//         odd = odd.next
//       }
//     }
//     count++
//     p = p.next
//   }
//   if (even) even.next = null
//   odd.next = evenHead
//   return newHead
// }

var oddEvenList = function (head) {
  if (head === null) {
    return head
  }
  let count = 1
  let cur = head
  let odd = head
  let even = odd.next
  while (cur !== null) {
    if (count !== 1 && count % 2 === 1) {
      let next = cur.next
      let oddNext = odd.next
      even.next = next
      odd.next = cur
      cur.next = oddNext
      odd = cur
      cur = next
      even = even.next
    } else {
      cur = cur.next
    }
    count++
  }
  return head
}
