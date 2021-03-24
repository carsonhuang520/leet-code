/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param head ListNode类
 * @return bool布尔型
 */
function hasCycle(head) {
  if (head === null) {
    return false
  }
  let slow = head
  let fast = slow.next
  while (fast !== null && fast.next !== null) {
    if (fast === slow) {
      return true
    }
    fast = fast.next.next
    slow = slow.next
  }
  return false
}
module.exports = {
  hasCycle: hasCycle,
}
