/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let dollor_5 = 0, dollor_10 = 0, dollor_20 = 0
    for (let bill of bills) {
        if (bill === 5) {
            dollor_5++
        } else if (bill === 10) {
            if (dollor_5 > 0) {
                dollor_10++
                dollor_5--
            } else {
                return false
            }
        } else {
            if (dollor_10 > 0 && dollor_5 > 0) {
                dollor_10--
                dollor_5--
                dollor_20++
            } else if (dollor_5 >=3){
                dollor_5 -= 3
                dollor_20++
            } else {
                return false
            }
        }
    }
    return true
};