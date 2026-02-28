# 2427 - First Letter to Appear Twice

**Difficulty:** Easy  
**Problem:** [LeetCode 2427](https://leetcode.com/problems/first-letter-to-appear-twice/)

## Problem Description

Given a string `s` consisting of lowercase English letters, return the first letter to appear twice.

A letter `a` appears twice before another letter `b` if the second occurrence of `a` is before the second occurrence of `b`.

## Examples

**Example 1:**
```
Input: s = "abccbaacz"
Output: "c"
```

**Example 2:**
```
Input: s = "abcdd"
Output: "d"
```

## Constraints
- `2 <= s.length <= 100`
- `s` consists of lowercase English letters.
- `s` has at least one repeated letter.

## Approach

1. For each character, find all its later occurrences
2. Track the minimum second occurrence index
3. Return the character with the smallest second occurrence

## Solution (C++ - Best)

```cpp
class Solution {
public:
    char repeatedCharacter(string s) {
        int index = s.size();
        char result = 'a';
        for(int i = 0; i < s.size(); i++){
            for(int j = i + 1; j < s.size(); j++){
                if(s[i] == s[j] && i != j){
                    if(j < index){
                        index = j;
                        result = s[i];
                    }
                }
            }
        }
        return result;
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(n^2)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 0 ms | 8.1 MB | C++ |
| 4 ms | 54.3 MB | JavaScript |
