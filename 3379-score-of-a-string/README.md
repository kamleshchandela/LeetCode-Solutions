# 3379 - Score of a String

**Difficulty:** Easy  
**Problem:** [LeetCode 3379](https://leetcode.com/problems/score-of-a-string/)

## Problem Description

You are given a string `s`. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

Return the score of `s`.

## Examples

**Example 1:**
```
Input: s = "hello"
Output: 13
```

**Example 2:**
```
Input: s = "zaz"
Output: 50
```

## Constraints
- `2 <= s.length <= 100`
- `s` consists only of lowercase English letters.

## Approach

1. Iterate through adjacent pairs
2. Calculate absolute difference of ASCII values
3. Sum all differences

## Solution (C++ - Best)

```cpp
class Solution {
public:
    int scoreOfString(string s) {
        int sum = 0;
        for(int i = 0; i < s.size() - 1; i++){
            int a = int(s[i]) - int(s[i + 1]);
            if(a > 0){
                sum = sum + a;
            }
            else{
                sum = sum + a * (-1);
            }
        }
        return sum;
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 0 ms | 8.9 MB | C++ |
| 0 ms | 55.8 MB | JavaScript |
