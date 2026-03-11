# 3636 - Check Balanced String

**Difficulty:** Easy  
**Problem:** [LeetCode 3636](https://leetcode.com/problems/check-balanced-string/)

## Problem Description

You are given a string `num` consisting of only digits. A string is called balanced if the sum of digits at even indices equals the sum of digits at odd indices.

Return `true` if `num` is balanced.

## Examples

**Example 1:**
```
Input: num = "1234"
Output: false
```

**Example 2:**
```
Input: num = "24123"
Output: true
```

## Constraints
- `2 <= num.length <= 100`
- `num` consists of digits only

## Approach

1. Calculate sum of digits at even indices
2. Calculate sum of digits at odd indices
3. Compare the two sums

## Solution (C++ - Best)

```cpp
class Solution {
public:
    bool isBalanced(string num) {
        int s1 = 0;
        int s2 = 0;
        for(int i = 0; i < num.size(); i++){
            if(i % 2 == 0){
                s1 = s1 + (num[i] - '0');
            }
            else{
                s2 = s2 + (num[i] - '0');
            }
        }
        if(s1 == s2){
            return true;
        }
        else{
            return false;
        }
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 0 ms | 8.6 MB | C++ |
| 1 ms | 55.7 MB | JavaScript |
