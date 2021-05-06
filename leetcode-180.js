/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) {
    return null
  }
  let ptrA = headA
  let ptrB = headB
  while (ptrA !== ptrB) {
    if (ptrA !== null) {
      ptrA = ptrA.next
    } else {
      ptrA = headB
    }
    if (ptrB !== null) {
      ptrB = ptrB.next
    } else {
      ptrB = headA
    }
  }
  return ptrA
}
