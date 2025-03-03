/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time) {
    const arr = time.split('')

    if (arr[0] === '?') {
        if (Number(arr[1]) > 4) {
            arr[0] = '1'
        } else {
            arr[0] = '2'
        }
    }

    if (arr[1] === '?') {
        if (Number(arr[0]) === 2 ) {

        } else if (Number(arr[0]) === 2) {
            arr[1] = '3'
        } else {
            arr[1] = '9'
        }
    }

    if (arr[3] === '?') {
        if (arr[4] === '0' || arr[4] === '?') {
            arr[3] = '6'
        } else {
            arr[3] = '5'
        }
    }

    if (arr[4] === '?') {
        if (arr[3] === '6') {
            arr[4] = '0'
        } else {
            arr[4] = '9'
        }
    }

    
    return time
};