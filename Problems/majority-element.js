// https://leetcode.com/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150

var majorityElement = function (nums) {
    let finalCount = 0
    let majorityElement = nums[0]
    for (let i = 0; i < nums.length; i++) {
        let currentCount = 0
        for (let j = 0; j < nums.length; j++) {
            if(nums[i] === nums[j]) {
                currentCount++
            }
        }
        if(currentCount > Math.floor(nums.length/2)) {
            finalCount = currentCount
            majorityElement = nums[i]
            return majorityElement
        }
    }
    return majorityElement
};