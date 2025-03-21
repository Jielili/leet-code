/**
 * @param {number[]} nums
 * @return {number}
 */

var wiggleMaxLength = function(nums) {
    let up = 1, down = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            up = down + 1
        } else if (nums[i] < nums[i - 1]) {
            down = up + 1
        }
    }
    return Math.max(up, down)
};


var wiggleMaxLength1 = function(nums) {
    const dp = new Array(nums.length).fill(0).map(() => [0, 0])
    dp[0] = [1, 1]
    for (let i = 1; i < nums.length; i++) {
        for (let j = i - 1; j >= 0; j++) {
            if (nums[j] > nums[i] && dp[j][0] > dp[i][1]) {
                dp[i][1] = dp[j][0]
            }
            if (nums[j] < nums[i] && dp[j][1] > dp[i][0]) {
                dp[i][0] = dp[j][1]
            }
            dp[i][0]++
            dp[i][1]++
        }
    }
    return Math.max(...dp[nums.length - 1])
};

