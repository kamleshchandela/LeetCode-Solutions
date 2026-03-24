# 258 - Add Digits

**Difficulty:** Easy  
**Problem:** [LeetCode 258](https://leetcode.com/problems/add-digits/)

## Problem Description

Given an integer `num`, repeatedly add all its digits until the result has only one digit, and return it.

## Examples

**Example 1:**
```
Input: num = 38
Output: 2
```

**Example 2:**
```
Input: num = 0
Output: 0
```

## Constraints
- `0 <= num <= 2^31 - 1`

## Approach

**Digit Sum Loop:**
1. Extract each digit using modulo 10
2. Add to sum
3. Repeat until sum is single digit

**Optimal Digital Root Formula (not implemented):**
- For num > 0: `1 + (num - 1) % 9`
- This gives O(1) time complexity

## Solution (C++)

```cpp
class Solution {
public:
    int addDigits(int num) {
        bool check = true;
        while(check){
            int temp = 0;
            while(num >= 1){
                temp = temp + num % 10;
                num = int(num / 10);
            }
            if(temp > 9){
                num = temp;
                check = true;
            }
            else {
                check = false;
                return temp;
            }
        }
        return 0;
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(log n)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 0 ms | 8.6 MB | C++ |
| 2 ms | 56.1 MB | JavaScript |
