// 238. Product of Array Except Self
// Medium
// Topics: Array, Prefix Sum
// Companies: Various
// Hint: Use prefix and suffix product technique

// Given an integer array `nums`, return an array `answer` such that
// `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

// Constraints:
// - The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.
// - You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1, 2, 3, 4]
// Output: [24, 12, 8, 6]

// Example 2:
// Input: nums = [-1, 1, 0, -3, 3]
// Output: [0, 0, 9, 0, 0]

// Medium
// Topics: Array, Prefix Sum
// Companies: Various
// Hint: Use prefix and suffix product technique

// Given an integer array `nums`, return an array `answer` such that
// `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

// Constraints:
// - The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.
// - You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1, 2, 3, 4]
// Output: [24, 12, 8, 6]

// Example 2:
// Input: nums = [-1, 1, 0, -3, 3]
// Output: [0, 0, 9, 0, 0]

var productExceptSelf = function (nums) {
    let prefix = [];
    let postfix = [];
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) prefix.push(nums[i]);
        else prefix.push(prefix[i - 1] * nums[i]);
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        if (i === nums.length - 1) postfix[i] = nums[i];
        else postfix[i] = postfix[i + 1] * nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) result.push(postfix[i + 1]);
        else if (i === nums.length - 1) result.push(prefix[i-1]);
        else result.push(prefix[i - 1] * postfix[i + 1]);
    }

    return result;
};


let nums = [1, 2, 3, 4]
console.log(productExceptSelf(nums))



