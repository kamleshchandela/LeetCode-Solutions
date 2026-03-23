# 2032 - Largest Odd Number in String

**Difficulty:** Easy  
**Problem:** [LeetCode 2032](https://leetcode.com/problems/largest-odd-number-in-string/)

## Problem Description

You are given a string `num`, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of `num`, or an empty string "" if no odd integer exists.

A substring is a contiguous sequence of characters within a string.

## Examples

**Example 1:**
```
Input: num = "52"
Output: "5"
```

**Example 2:**
```
Input: num = "4206"
Output: ""
```

**Example 3:**
```
Input: num = "35427"
Output: "35427"
```

## Constraints
- `1 <= num.length <= 10^5`
- `num` only consists of digits and does not contain any leading zeros.

## Approach

1. Iterate through the string, building substrings
2. When an odd digit is found, check if it's longer than current max
3. Return the longest odd substring

## Solution (JavaScript)

```javascript
var largestOddNumber = function(num) {
    let s = "";
    let max = "";
    for(let i = 0; i < num.length; i++){
        s = s + num[i];
        if(num[i] % 2 == 1){
            if(max.length < s.length){
                max = s;
            }
        }
    }
    return max;
};
```

## Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 23 ms | 61.4 MB | JavaScript |
