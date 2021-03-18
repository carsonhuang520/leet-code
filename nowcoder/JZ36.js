/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2) {
  if (pHead1 === null || pHead2 === null) {
    return null
  }
  let pre1 = pHead1
  let pre2 = pHead2
  while (pre1 !== pre2) {
    if (pre1 === null) {
      pre1 = pHead2
    } else {
      pre1 = pre1.next
    }
    if (pre2 === null) {
      pre2 = pHead1
    } else {
      pre2 = pre2.next
    }
  }
  return pre2
}
module.exports = {
  FindFirstCommonNode: FindFirstCommonNode,
}
