# 2812 - Find the Maximum Achievable Number

**Difficulty:** Easy  
**Problem:** [LeetCode 2812](https://leetcode.com/problems/find-the-maximum-achievable-number/)

## Problem Description

Given two integers `num` and `t`. A number `x` is achievable if it can become equal to `num` after applying the following operation at most `t` times:
- Increase or decrease `x` by `1`, and simultaneously increase or decrease `num` by `1`.

Return the maximum possible value of `x`.

## Examples

**Example 1:**
```
Input: num = 4, t = 1
Output: 6
```

**Example 2:**
```
Input: num = 3, t = 2
Output: 7
```

## Constraints
- `1 <= num, t <= 50`

## Approach

Each operation can increase x by 2 (decrease x by 1 while increasing num by 1). So the maximum achievable x is: `num + 2 * t`

## Solution (JavaScript)

```javascript
var theMaximumAchievableX = function(num, t) {
    return num + 2 * t;
};
```

## Complexity Analysis
- **Time Complexity:** O(1)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 1 ms | 58.3 MB | JavaScript |
