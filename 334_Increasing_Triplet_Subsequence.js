// 334. Increasing Triplet Subsequence
// Medium
// Topics: Arrays, Dynamic Programming, Greedy Algorithms
// Companies: Multiple Companies

// Problem:
// Given an integer array nums, return true if there exists a triple of indices (i, j, k)
// such that i < j < k and nums[i] < nums[j] < nums[k].
// If no such indices exist, return false.

// Example 1:
// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.

// Example 2:
// Input: nums = [5,4,3,2,1]
// Output: false
// Explanation: No triplet exists.

// Example 3:
// Input: nums = [2,1,5,0,4,6]
// Output: true
// Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.

// Constraints:
// 1 <= nums.length <= 5 * 10^5
// -2^31 <= nums[i] <= 2^31 - 1
var increasingTriplet = function (nums) {
    let first = nums[0];
    let first_index = 0;
    let second = nums[0];
    let second_index = nums[0];
    let third = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < first) {
            first = nums[i];
            first_index = i;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (second < nums[i] && i > first_index) {
            second = nums[i];
            second_index = i;
            break;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (third < nums[i] && i > first_index && i > second_index) {
            third = nums[i];
            break;
        }
    }
    return [first, second, third];
    if (first < second && second < third) {
        return true;
    }

    return false;
};

let nums = [20, 100, 10, 12, 5, 13]
console.log(increasingTriplet(nums))



