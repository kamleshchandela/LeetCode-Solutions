# 2365 - Percentage of Letter in String

**Difficulty:** Easy  
**Problem:** [LeetCode 2365](https://leetcode.com/problems/percentage-of-letter-in-string/)

## Problem Description

Given a string `s` and a character `letter`, return the percentage of characters in `s` that equal `letter` rounded down to the nearest whole percent.

## Examples

**Example 1:**
```
Input: s = "foobar", letter = "o"
Output: 33
```

**Example 2:**
```
Input: s = "jjjj", letter = "k"
Output: 0
```

## Constraints
- `1 <= s.length <= 100`
- `s` consists of lowercase English letters.
- `letter` is a lowercase English letter.

## Approach

1. Count occurrences of the letter in the string
2. Calculate percentage: `(count * 100) / s.length`

## Solution (C++ - Best)

```cpp
class Solution {
public:
    int percentageLetter(string s, char letter) {
        int count = 0;
        for(int i = 0; i < s.size(); i++){
            if(s[i] == letter){
                count++;
            }
        }
        int ans = count * 100 / s.size();
        return ans;
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 0 ms | 8.2 MB | C++ |
| 0 ms | 8.4 MB | C++ |
| 0 ms | 52.7 MB | JavaScript |
