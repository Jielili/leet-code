/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    // const arr = num.split('')
    // for (let i = arr.length - 1; i > 0; i++) {
    //     if (Number(arr[i]) % 2 === 1) {
    //         break
    //     }
    //     arr.pop()
    // }
    // return arr.join('')
    return num.match(/^\d*[13579]/g)?.[0] ?? '';
};