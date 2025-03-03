/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let figure = 0, position = 0, temp = num
    while (temp % 10 > 0) {
        figure += 1
        const remainder = temp % 10
        if (remainder === 6) {
            position = figure
        }
        temp = (temp - remainder) / 10
    }

    if (position > 0) {
        return num + 10 ^ (position - 1) * 3
    } else {
        return num
    }
};