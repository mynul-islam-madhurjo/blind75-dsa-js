// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
//
//     A subsequence of a string is a new string that is formed from the original string by deleting some (can be none)
//     of the characters without disturbing the relative positions of the remaining characters.
//     (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
//
//
//
// Example 1:
//
// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:
//
// Input: s = "axc", t = "ahbgdc"
// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let s_i = 0;
    let t_i = 0;
    while (t_i < t.length) {
        if (s[s_i] === t[t_i]) {
            s_i++;
            t_i++;
        } else {
            t_i++;
        }
    }
    return s_i===s.length;
};


let s = "bb";
let t = "ahbgdc";

console.log(isSubsequence(s, t))
