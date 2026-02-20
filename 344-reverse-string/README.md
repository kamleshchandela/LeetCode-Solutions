# 344 - Reverse String

**Difficulty:** Easy  
**Problem:** [LeetCode 344](https://leetcode.com/problems/reverse-string/)

## Problem Description

Write a function that reverses a string. The input string is given as an array of characters `s`.

You must do this by modifying the input array in-place with O(1) extra memory.

## Examples

**Example 1:**
```
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
```

**Example 2:**
```
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
```

## Constraints
- `1 <= s.length <= 10^5`
- `s[i]` is a printable ASCII character.

## Approach

Use two pointers, swapping characters from both ends moving toward the center.

## Solution (C++ - Best)

```cpp
class Solution {
public:
    void reverseString(vector<char>& s) {
        int l = 0;
        int r = s.size() - 1;
        while(l < r){
            int temp = s[l];
            s[l] = s[r];
            s[r] = temp;
            l++;
            r--;
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
| 0 ms | 27.2 MB | C++ |
| 0 ms | 27.3 MB | C++ |
| 1 ms | 61.3 MB | JavaScript |
| 1 ms | 61.7 MB | JavaScript |
