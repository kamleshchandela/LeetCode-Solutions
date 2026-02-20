# 2238 - A Number After a Double Reversal

**Difficulty:** Easy  
**Problem:** [LeetCode 2238](https://leetcode.com/problems/a-number-after-a-double-reversal/)

## Problem Description

Reversing an integer means to reverse all its digits. For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as leading zeros are not retained.

Given an integer `num`, reverse `num` to get `reversed1`, then reverse `reversed1` to get `reversed2`. Return `true` if `reversed2` equals `num`. Otherwise return `false`.

## Examples

**Example 1:**
```
Input: num = 526
Output: true
```

**Example 2:**
```
Input: num = 1800
Output: false
```

**Example 3:**
```
Input: num = 0
Output: true
```

## Constraints
- `0 <= num <= 10^6`

## Approach

1. Reverse the number to get reversed1
2. Reverse reversed1 to get reversed2
3. Compare reversed2 with original num

## Solution (C++ - Best)

```cpp
class Solution {
public:
    bool isSameAfterReversals(int num) {
        int n1 = num;
        int temp1 = 0;
        int temp2 = 0;
        while(n1 >= 1){
            temp1 = temp1 * 10 + n1 % 10;
            n1 = int(n1 / 10);
        }
        while(temp1 >= 1){
            temp2 = temp2 * 10 + temp1 % 10;
            temp1 = int(temp1 / 10);
        }
        if(temp2 == num){
            return true;
        }
        return false;
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(log n)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 0 ms | 7.9 MB | C++ |
| 0 ms | 52.4 MB | JavaScript |
