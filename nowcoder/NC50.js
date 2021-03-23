function ListNode(x) {
  this.val = x
  this.next = null
}

/**
 *
 * @param head ListNode类
 * @param k int整型
 * @return ListNode类
 */
function reverse(head) {
  if (head === null || head.next === null) {
    return head
  }
  let prev = null
  let cur = head
  while (cur !== null) {
    cur = cur.next
    head.next = prev
    prev = head
    head = cur
  }
  return prev
}
function reverseKGroup(head, k) {
  if (head === null) {
    return null
  }
  let dummy = new ListNode(0)
  dummy.next = head
  let a = dummy
  let b = head
  while (b !== null) {
    for (let i = 0; i < k - 1; i++) {
      b = b.next
      if (b === null) {
        return dummy.next
      }
    }
    let next = b.next
    b.next = null
    b = reverse(a.next)
    let temp = b
    while (temp.next !== null) {
      temp = temp.next
    }
    temp.next = next
    a.next = b
    a = temp
    b = next
  }
  return dummy.next
}
let head = new ListNode(1)
let cur = head
for (let i = 2; i <= 12; i++) {
  let node = new ListNode(i)
  cur.next = node
  cur = cur.next
}
head = reverseKGroup(head, 3)
// head = reverse(head)
for (let p = head; p !== null; p = p.next) {
  console.log(p.val)
}
module.exports = {
  reverseKGroup: reverseKGroup,
}
