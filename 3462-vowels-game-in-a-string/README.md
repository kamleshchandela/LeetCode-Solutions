# 3462 - Vowels Game in a String

**Difficulty:** Medium  
**Problem:** [LeetCode 3462](https://leetcode.com/problems/vowels-game-in-a-string/)

## Problem Description

Alice and Bob are playing a game on a string `s`. Alice starts first:
- Alice removes any non-empty substring with an odd number of vowels
- Bob removes any non-empty substring with an even number of vowels

The first player who cannot make a move loses. Both play optimally.

Return `true` if Alice wins.

## Examples

**Example 1:**
```
Input: s = "leetcoder"
Output: true
```

**Example 2:**
```
Input: s = "bbcd"
Output: false
```

## Constraints
- `1 <= s.length <= 10^5`
- `s` consists only of lowercase English letters.

## Approach

If there is at least one vowel in the string, Alice can win by removing a substring containing that vowel.

## Solution (C++ - Best)

```cpp
class Solution {
public:
    bool doesAliceWin(string s) {
        for(int i = 0; i < s.size(); i++){
            if(s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u'){
                return true;
            }
        }
        return false;
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 2 ms | 59.4 MB | JavaScript |
| 3 ms | 59.1 MB | JavaScript |
| 8 ms | 19 MB | C++ |
