/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param head ListNode类
 * @param n int整型
 * @return ListNode类
 */
function removeNthFromEnd(head, n) {
  if (head === null) {
    return head
  }
  let dummyHead = new ListNode(0)
  dummyHead.next = head
  let slow = dummyHead
  let fast = dummyHead
  for (let i = 0; i <= n; i++) {
    if (fast === null) {
      return dummyHead.next
    }
    fast = fast.next
  }
  while (fast !== null) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return dummyHead.next
}
module.exports = {
  removeNthFromEnd: removeNthFromEnd,
}
