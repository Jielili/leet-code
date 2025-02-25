/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  const res = new ListNode()
  let p = list1, q = list2, cur = res
  while (p && q) {
    if (p.val < q.val) {
      cur.next = p
      p = p.next
    } else {
      cur.next = q
      q = q.next
    }
    cur = cur.next
  }
  if (q) cur.next = q
  if (p) cur.next = p
  return res.next
};