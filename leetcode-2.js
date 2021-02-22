var addTwoNumbers = function (l1, l2) {
  if (l1 === null) {
    return l2
  }
  if (l2 === null) {
    return l1
  }
  let t1 = l1
  let pre = null
  let t2 = l2
  let temp = 0
  while (t1 !== null && t2 !== null) {
    let sum = t1.val + t2.val + temp
    temp = Math.floor(sum / 10)
    t1.val = sum % 10
    pre = t1
    t1 = t1.next
    t2 = t2.next
  }
  while (t1 !== null) {
    let sum = t1.val + temp
    temp = Math.floor(sum / 10)
    t1.val = sum % 10
    pre = t1
    t1 = t1.next
  }
  while (t2 !== null) {
    let sum = t2.val + temp
    temp = Math.floor(sum / 10)
    let node = new ListNode(sum % 10)
    pre.next = node
    pre = pre.next
    t2 = t2.next
  }
  if (temp !== 0) {
    let node = new ListNode(temp)
    pre.next = node
    pre = pre.next
  }
  return l1
}
