# 2083 - Three Divisors

**Difficulty:** Easy  
**Problem:** [LeetCode 2083](https://leetcode.com/problems/three-divisors/)

## Problem Description

Given an integer `n`, return `true` if `n` has exactly three positive divisors. Otherwise, return `false`.

An integer `m` is a divisor of `n` if there exists an integer `k` such that `n = k * m`.

## Examples

**Example 1:**
```
Input: n = 2
Output: false
```

**Example 2:**
```
Input: n = 4
Output: true
```

## Constraints
- `1 <= n <= 10^4`

## Approach

1. Count all divisors of n by iterating from 1 to n
2. Return true if count equals exactly 3

## Solution (C++)

```cpp
class Solution {
public:
    bool isThree(int n) {
        int count = 0;
        for(int i = 1; i <= n; i++){
            if(n % i == 0){
                count++;
            }
        }
        if(count > 3 || count < 3){
            return false;
        }
        return true;
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 0 ms | 53.8 MB | JavaScript |
| 2 ms | 7.8 MB | C++ |
