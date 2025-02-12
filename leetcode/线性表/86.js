/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  const small_head = new ListNode()
  const big_head = new ListNode()
  let m = small_head
  let n = big_head
  let p = head
  while (p) {
    if (p.val < x) {
      m.next = new ListNode(p.val)
      m = m.next
    } else {
      n.next = new ListNode(p.val)
      n = n.next
    }
    p = p.next
  }
  m.next = big_head.next
  return small_head.next
};


var partition = function(head, x) {
  const small_head = new ListNode()
  const big_head = new ListNode()
  let m = small_head, n = big_head
  const p = head
  while (p) {
    if (p.val < x) {
      m.next = p
      m = m.next
    } else {
      n.next = p
      n = n.next
    }
    p = p.next
  }
  m.next = big_head.next
  n.next = null
  return small_head.next
};


