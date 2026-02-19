# 29 - Divide Two Integers

**Difficulty:** Medium  
**Problem:** [LeetCode 29](https://leetcode.com/problems/divide-two-integers/)

## Problem Description

Given two integers `dividend` and `divisor`, divide two integers without using multiplication, division, and mod operator.

The integer division should truncate toward zero.

Return the quotient after dividing dividend by divisor.

**Note:** If quotient > 2^31 - 1, return 2^31 - 1. If quotient < -2^31, return -2^31.

## Examples

**Example 1:**
```
Input: dividend = 10, divisor = 3
Output: 3
```

**Example 2:**
```
Input: dividend = 7, divisor = -3
Output: -2
```

## Constraints
- `-2^31 <= dividend, divisor <= 2^31 - 1`
- `divisor != 0`

## Approach

1. Handle edge cases for INT_MIN and INT_MAX
2. Use standard division

## Solution (C++ - Best)

```cpp
class Solution {
public:
    int divide(int dividend, int divisor) {
        if(dividend == INT_MIN && divisor == -1) return INT_MAX;
        if(dividend == INT_MIN && divisor == 1) return INT_MIN;
        return int(dividend / divisor);
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(1)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 0 ms | 8.6 MB | C++ |
| 1 ms | 56.5 MB | JavaScript |
