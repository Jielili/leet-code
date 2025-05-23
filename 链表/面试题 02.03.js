/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    while (node.next) {
        node.val = node.next.val
        if (!node.next.next) {
            node.next = null
            break
        }
        node = node.next
    }
};