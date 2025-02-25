 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if(!head) return head
  let tail = head
  let total = 1
  while (tail.next) {
    tail = tail.next
    total ++
  }
  const diff = total - (k % total)
  tail.next = head
  for (let i = 0; i < diff; i++) {
    tail = tail.next
  }
  head = tail.next
  tail.next = null
  return head
};