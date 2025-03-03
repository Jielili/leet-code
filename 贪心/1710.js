/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    let res = 0
    boxTypes.sort((a,b) => b[1] - a[1])
    for (let box_type of boxTypes) {
        const [num, unit] = box_type
        if (truckSize >= num) {
            res += num * unit
            truckSize -= num
        } else {
            res += truckSize * unit
            break
        }
    }
    return res
};