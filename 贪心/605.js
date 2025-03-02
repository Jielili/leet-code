/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let res = 0, num_0 = 0
    for(let bit of flowerbed) {
        if(!bit) {
            num_0++
        }else{
            res+=(num-1) << 1
        }
    }
    return res >= n
};