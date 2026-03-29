# 🚀 LeetCode #4264 - First Matching Character From Both Ends

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)

---

## 📝 Problem Statement

Given string s, find the first index where characters from both ends match.

---

## 🏆 Best Solution (C++)

```cpp
class Solution {
public:
    int firstMatchingIndex(string s) {
        int l = 0, r = s.size() - 1;
        while(l <= r){
            if(s[l] == s[r]) return l;
            l++; r--;
        }
        return -1;
    }
};
```

**Stats:** ⚡ 0ms | 💾 8.9MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/first-matching-character-from-both-ends/)