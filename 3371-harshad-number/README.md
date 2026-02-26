# 3371 - Harshad Number

**Difficulty:** Easy  
**Problem:** [LeetCode 3371](https://leetcode.com/problems/harshad-number/)

## Problem Description

An integer divisible by the sum of its digits is said to be a Harshad number. You are given an integer `x`. Return the sum of the digits of `x` if `x` is a Harshad number, otherwise return `-1`.

## Examples

**Example 1:**
```
Input: x = 18
Output: 9
```

**Example 2:**
```
Input: x = 23
Output: -1
```

## Constraints
- `1 <= x <= 100`

## Approach

1. Calculate sum of digits
2. Check if x is divisible by digit sum
3. Return digit sum or -1

## Solution (C++ - Best)

```cpp
class Solution {
public:
    int sumOfTheDigitsOfHarshadNumber(int x) {
        int temp = 0;
        int num = x;
        while(x >= 1){
            temp = x % 10 + temp;
            x = int(x / 10);
        }
        if(num % temp == 0){
            return temp;
        }
        return -1;
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(log x)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 0 ms | 7.7 MB | C++ |
| 0 ms | 54.4 MB | JavaScript |
