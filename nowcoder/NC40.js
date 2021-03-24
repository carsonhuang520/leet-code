/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param head1 ListNode类
 * @param head2 ListNode类
 * @return ListNode类
 */
function addInList(head1, head2) {
  if (head1 === null) {
    return head2
  }
  if (head2 === null) {
    return head1
  }
  return add(head1, head2)
}
function add(head1, head2) {
  head1 = reverse(head1)
  head2 = reverse(head2)
  let res = new ListNode(0)
  let cur = res
  let carry = 0
  while (head1 || head2) {
    let sum
    if (head1 && head2) {
      sum = head1.val + head2.val + carry
      head1 = head1.next
      head2 = head2.next
    } else if (head1) {
      sum = head1.val + carry
      head1 = head1.next
    } else if (head2) {
      sum = head2.val + carry
      head2 = head2.next
    }
    carry = Math.floor(sum / 10)
    let temp = new ListNode(sum % 10)
    cur.next = temp
    cur = cur.next
  }
  if (carry) {
    let temp = new ListNode(carry)
    cur.next = temp
    cur = cur.next
  }
  return reverse(res.next)
}
function reverse(head) {
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
module.exports = {
  addInList: addInList,
}
