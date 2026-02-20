# 231 - Power of Two

**Difficulty:** Easy  
**Problem:** [LeetCode 231](https://leetcode.com/problems/power-of-two/)

## Problem Description

Given an integer `n`, return `true` if it is a power of two. Otherwise, return `false`.

An integer `n` is a power of two if there exists an integer `x` such that `n == 2^x`.

## Examples

**Example 1:**
```
Input: n = 1
Output: true
```

**Example 2:**
```
Input: n = 16
Output: true
```

**Example 3:**
```
Input: n = 3
Output: false
```

## Constraints
- `-2^31 <= n <= 2^31 - 1`

## Approach

1. Check if n equals 2^i for any i
2. Return true if found, false otherwise

## Solution (JavaScript)

```javascript
var isPowerOfTwo = function(n) {
    for(let i = 0; i < 2 ** 31; i++){
        if(n == 2 ** i){
            return true;
        }
        if(2 ** i > n){
            return false;
        }
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(log n)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 1 ms | 56.7 MB | JavaScript |
| 2 ms | 54.5 MB | JavaScript |
