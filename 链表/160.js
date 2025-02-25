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
    let p = headA, q = headB
    let is_p_at_b = false, is_q_at_a = false
    while (p !== q) {
        p = p.next
        q = q.next
        if (!p && !is_p_at_b) p = headB
        if (!q && !is_q_at_a) q = headA
    }
    return p
};