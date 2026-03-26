# 1630 - Count Odd Numbers in an Interval Range

**Difficulty:** Easy  
**Problem:** [LeetCode 1630](https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/)

## Problem Description

Given two non-negative integers `low` and `high`. Return the count of odd numbers between `low` and `high` (inclusive).

## Examples

**Example 1:**
```
Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].
```

**Example 2:**
```
Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9].
```

## Constraints
- `0 <= low <= high <= 10^9`

## Approach

**Mathematical Formula:**
- Count of odds from 1 to n = `(n + 1) / 2`
- Count of odds from low to high = `countOdds(high) - countOdds(low - 1)`
- Alternative: `(high - low) / 2 + (low is odd OR high is odd)`

## Solution (C++ - Best)

```cpp
class Solution {
public:
    int countOdds(int low, int high) {
        return int((high - low) / 2) + (low % 2 == 1 || high % 2 == 1);
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(1)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 3 ms | 7.6 MB | C++ |
| 44 ms | 54.6 MB | JavaScript |
