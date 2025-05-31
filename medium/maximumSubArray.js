/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let tempStart = 0;
    let end = 0
    let currentMax = nums[0]
    let totalMax = nums[0]
    let start = 0 
    for (let i = 1; i < nums.length; i++) {
        if (currentMax + nums[i] > nums[i]) {
            currentMax = currentMax + nums[i]
        } else {
            currentMax = nums[i];
            tempStart = i
        }
        if (currentMax > totalMax) {
            totalMax = currentMax;
            start = tempStart;
            end = i
        }
    }

    return totalMax
};