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
var reverseList = function (head) {
    if (!head) return head
    if (head.next) {
        const a = reverseList(head.next)
        a.next.next = head;
        a.next = head
        return a
    } else {
        return head
    }
};
