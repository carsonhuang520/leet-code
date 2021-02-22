var addTwoNumbers = function (l1, l2) {
  let count = 0
  let temp
  let head = l1
  while (head !== null) {
    count++
    head = head.next
  }
  head = l2
  while (head !== null) {
    count--
    head = head.next
  }
  if (count < 0) {
    let temp = l1
    l1 = l2
    l2 = temp
  }
  let dummyHead = new ListNode(0)
  dummyHead.next = l1
  let last = dummyHead
  for (let i = Math.abs(count); i >= 0; i--) {
    if (l1.val !== 9) {
      last = l1
    }
    l1 = l1.next
  }
  while (l1) {
    let temp = l2.val + l1.val
    if (temp > 9) {
      temp = temp - 10
      last.val += 1
      last = last.next
      while (last !== l1) {
        last.val = 0
        last = last.next
      }
    } else if (temp !== 9) {
      last = l1
    }
    l1.val = temp
    l1 = l1.next
    l2 = l2.next
  }
  return dummyHead.val === 1 ? dummyHead : dummyHead.next
}
