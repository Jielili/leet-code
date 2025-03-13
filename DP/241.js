/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    return dp(expression, 0, expression.length - 1)
};


// the calculate result of expression from i to j
var dp = function(expression, i) {

    console.log('i', i)

    if(i >= expression.length) {
        return []
    }

    // Only the number is left
    if(expression.length - 1 - i <= 1) {
        return [Number(expression.substring(i))]
    }

    const first_info = getTheNumber(expression, i)
    const first = first_info.res
    const second_info = getTheNumber(expression, first_info.next + 1)
    const second = second_info.res

    console.log(first, second)
    console.log(first_info, second_info)

    const res = []
    // if we operate first num with second num
    const last_1 = dp(expression, second_info.next + 1)
    const operate_res = calculate(first, second, expression[first_info.next])
    last_1.map(item => calculate(item, operate_res, expression[second_info.next]))
    res.push(...last_1)

    // else
    const last_2 = dp(expression, first_info.next + 1)
    last_2.map(item => calculate(item, first, expression[first_info.next]))
    res.push(...last_2)

    return res
}

var getTheNumber = function(expression, i) {
    let res = 0; 
    while(expression[i] !== '+' && expression[i] !== '-' && expression[i] !== '*' && i < expression.length) {
        res = (res * 10) + Number(expression[i])
        i++
    }
    return {
        res, 
        next: i
    }
}


var calculate = function(a, b, o) {
    console.log(a, b, o)
    if(o === '+') {
        return Number(a) + Number(b)
    } else if (o === '-') {
        return Number(a) - Number(b)
    } else {
        return Number(a) * Number(b)
    }
}