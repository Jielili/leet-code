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
	let cur = head.next, res = head
	head.next = null
	while (cur) {
		const next = cur.next
		cur.next = res
		res = cur
		cur = next
	}
	return res
};