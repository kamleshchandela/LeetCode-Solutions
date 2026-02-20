# 2243 - Check if All A's Appears Before All B's

**Difficulty:** Easy  
**Problem:** [LeetCode 2243](https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/)

## Problem Description

Given a string `s` consisting of only the characters 'a' and 'b', return `true` if every 'a' appears before every 'b' in the string. Otherwise, return `false`.

## Examples

**Example 1:**
```
Input: s = "aaabbb"
Output: true
```

**Example 2:**
```
Input: s = "abab"
Output: false
```

**Example 3:**
```
Input: s = "bbb"
Output: true
```

## Constraints
- `1 <= s.length <= 100`
- `s[i]` is either 'a' or 'b'.

## Approach

1. Traverse the string and check for any occurrence of "ba"
2. If found, return false
3. Otherwise return true

## Solution (C++ - Best)

```cpp
class Solution {
public:
    bool checkString(string s) {
        for(int i = 0; i < s.size() - 1; i++){
            if(s[i] == 'b' && s[i + 1] == 'a'){
                return false;
            }
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
| 0 ms | 8.3 MB | C++ |
| 0 ms | 53.8 MB | JavaScript |
| 0 ms | 54.3 MB | JavaScript |
