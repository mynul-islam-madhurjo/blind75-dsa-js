// For two strings s and t, we say "t divides s" if and only if:
// s = t + t + t + ... + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

/*
Example 1:
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Explanation: "ABC" is the largest string that divides both str1 and str2 since:
str1 = "ABC" + "ABC"
str2 = "ABC"
*/

/*
Example 2:
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Explanation: "AB" is the largest string that divides both str1 and str2 since:
str1 = "AB" + "AB" + "AB"
str2 = "AB" + "AB"
*/

/*
Example 3:
Input: str1 = "LEET", str2 = "CODE"
Output: ""
Explanation: There is no string that divides both str1 and str2.
*/

// Constraints:
// 1 <= str1.length, str2.length <= 1000
// str1 and str2 consist of English uppercase letters.
var gcdOfStrings = function (str1, str2) {
    let [arr1, arr2] = getDivisors(str1.length, str2.length);
    let greatestCommonDiv = getGcd(arr1, arr2);
    if (
        str1.slice(0, greatestCommonDiv).repeat(str1.length / greatestCommonDiv) === str1 &&
        str2.slice(0, greatestCommonDiv).repeat(str2.length / greatestCommonDiv) === str2 &&
        str1.slice(0, greatestCommonDiv) === str2.slice(0, greatestCommonDiv)
    )  {
        return str1.slice(0, greatestCommonDiv);
    }
    return '';
};

var getDivisors = function (num1, num2) {
    let arr1 = [];
    let arr2 = [];
    for (let i = 1; i <= num1; i++) {
        if (num1 % i === 0) {
            arr1.push(i)
        }
    }
    for (let i = 1; i <= num2; i++) {
        if (num2 % i === 0) {
            arr2.push(i)
        }
    }
    return [arr1,arr2];
}

var getGcd = function (arr1, arr2) {
    let common_numbers = arr1.filter(num => arr2.includes(num));
    return Math.max(...common_numbers);
}

// "TAUXX"
let str1 = "TAUXXTAUXXTAUXXTAUXXTAUXX";
let str2 = "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX";

console.log(gcdOfStrings(str1, str2));



