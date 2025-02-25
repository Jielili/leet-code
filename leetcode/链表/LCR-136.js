/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    if (head.val === val) return head.next
    let prev = head
    while(prev.next) {
        if (prev.next.val === val) {
            prev.next = prev.next.next
            break
        }
        prev = prev.next
    }
    return head
};