/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let p = head
    while (p.next) {
        if (p.val !== p.next.val) {
            p = p.next
        } else {
            p = p.next.next
        }
    }
    return head
};