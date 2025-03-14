/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
    let cur_num = 0
    const nums = []
    const operators = []
    for (let v of expression) {
        if (v === '+' || v === '-' || v === '*') {
            operators.push(v)
            nums.push(cur_num)
            cur_num = 0
        } else {
            cur_num = cur_num * 10 + Number(v)
        }
    }
    nums.push(cur_num)

    const memo = new Array(nums.length).fill(0).map(() => new Array(nums.length).fill(undefined))
    return dp(nums, operators, 0, nums.length - 1, memo)
};


// the calculate result of expression from i to j
var dp = function (nums, operators, i, j, memo) {

    if (memo[i][j] !== undefined) {
        return memo[i][j]
    }

    if (j === i) {
        memo[i][j] = [nums[i]]
        return memo[i][j]
    }
    
    // if only j and i are left
    if (j - i === 1) {
        memo[i][j] = [calculate(nums[i], nums[j], operators[i])]
        return memo[i][j]
    }

    const res = []

    // if more than three are left
    for (let k = i; k < j; k++) {
        const left = dp(nums, operators, i, k, memo)
        const right = dp(nums, operators, k + 1, j, memo)

        for (let l of left) {
            for (let r of right) {
                res.push(calculate(l, r, operators[k]))
            }
        }
    }

    memo[i][j] = res
    return res
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


console.log(diffWaysToCompute("2*3-4*5"))