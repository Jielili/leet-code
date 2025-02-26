/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let res = 0, max = tickets[k]
    for (let i = 0; i <= k; i++) {
        res += Math.min(tickets[i], max)
    }
    for (let i = k + 1; i < tickets.length; i++) {
        res += Math.min(tickets[i], max - 1)
    }
    return res
};