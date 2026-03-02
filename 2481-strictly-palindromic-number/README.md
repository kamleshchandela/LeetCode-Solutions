# 2481 - Strictly Palindromic Number

**Difficulty:** Medium  
**Problem:** [LeetCode 2481](https://leetcode.com/problems/strictly-palindromic-number/)

## Problem Description

An integer `n` is strictly palindromic if, for every base `b` between 2 and `n - 2` (inclusive), the string representation of the integer `n` in base `b` is palindromic.

Given an integer `n`, return `true` if `n` is strictly palindromic and `false` otherwise.

## Examples

**Example 1:**
```
Input: n = 9
Output: false
```

**Example 2:**
```
Input: n = 4
Output: false
```

## Constraints
- `4 <= n <= 10^5`

## Approach

This is a trick problem! No integer `n >= 4` can be strictly palindromic. The solution simply returns `false`.

**Mathematical Insight:** For any `n >= 4`, when represented in base `n - 2`, the representation is "12" which is not a palindrome.

## Solution (C++)

```cpp
class Solution {
public:
    bool isStrictlyPalindromic(int n) {
        return false;
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(1)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 0 ms | 7.6 MB | C++ |
| 0 ms | 53.7 MB | JavaScript |
