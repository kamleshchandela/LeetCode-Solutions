# 1781 - Check If Two String Arrays are Equivalent

**Difficulty:** Easy  
**Problem:** [LeetCode 1781](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/)

## Problem Description

Given two string arrays `word1` and `word2`, return `true` if the two arrays **represent** the same string, and `false` otherwise.

A string is **represented** by an array if the array elements concatenated **in order** forms the string.

## Examples

**Example 1:**
```
Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
```

**Example 2:**
```
Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false
```

**Example 3:**
```
Input: word1 = ["abc", "d", "defg"], word2 = ["abcddefg"]
Output: true
```

## Constraints
- `1 <= word1.length, word2.length <= 10^3`
- `1 <= word1[i].length, word2[i].length <= 10^3`
- `1 <= sum(word1[i].length), sum(word2[i].length) <= 10^3`
- `word1[i]` and `word2[i]` consist of lowercase letters.

## Approach

1. Concatenate all strings in word1 into a single string
2. Concatenate all strings in word2 into a single string
3. Compare the two resulting strings

## Solution (JavaScript - Best)

```javascript
var arrayStringsAreEqual = function(word1, word2) {
    let s1 = "";
    let s2 = "";
    for(let i = 0; i < word1.length; i++){
        s1 = s1 + word1[i];
    }
    for(let i = 0; i < word2.length; i++){
        s2 = s2 + word2[i];
    }
    if(s1 === s2){
        return true;
    }
    return false;
};
```

## Complexity Analysis
- **Time Complexity:** O(n) where n is total length of all strings
- **Space Complexity:** O(n)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 0 ms | 54.3 MB | JavaScript |
| 2 ms | 15.2 MB | C++ |
