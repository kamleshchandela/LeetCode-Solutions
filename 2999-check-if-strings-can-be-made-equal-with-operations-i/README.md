# 2999 - Check if Strings Can be Made Equal With Operations I

**Difficulty:** Easy  
**Problem:** [LeetCode 2999](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/)

## Problem Description

You are given two strings `s1` and `s2`, both of length 4, consisting of lowercase English letters.

You can apply the following operation on any of the two strings any number of times:
- Choose any two indices `i` and `j` such that `j - i = 2`, then swap the two characters at those indices.

Return `true` if you can make the strings equal, and `false` otherwise.

## Examples

**Example 1:**
```
Input: s1 = "abcd", s2 = "cdab"
Output: true
```

**Example 2:**
```
Input: s1 = "abcd", s2 = "dacb"
Output: false
```

## Constraints
- `s1.length == s2.length == 4`
- `s1` and `s2` consist only of lowercase English letters.

## Approach

The operation swaps positions 0-2 or 1-3 (index difference of 2). Check if mismatched characters can be fixed by swaps:
1. If s1[i] != s2[i], check if swapping s1[i+2] with s1[i] would fix it
2. Apply same logic for last positions

## Solution (C++ - Best)

```cpp
class Solution {
public:
    bool canBeEqual(string s1, string s2) {
        for(int i = 0; i < s1.size() - 2; i++){
            if(s1[i] != s2[i]){
                if(!((s1[i+2] == s2[i]) && (s1[i] == s2[i+2]))){
                    return false;
                }
            }
        }
        int l = s1.size();
        if(s1[l - 1] != s2[l - 1]){
            if((s1[l - 3] != s2[l - 1]) || (s1[l - 1] != s2[l - 3])){
                return false;
            }
        }
        if(s1[l - 2] != s2[l - 2]){
            if((s1[l - 4] != s2[l - 2]) || (s1[l - 2] != s2[l - 4])){
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
| 0 ms | 8.1 MB | C++ |
| 0 ms | 56 MB | JavaScript |
