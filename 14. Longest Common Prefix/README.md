# 🚀 LeetCode #14 - Longest Common Prefix

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-Longest%20Common%20Prefix-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-April%202026-orange)

---

## 📝 Problem Statement

Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".

---

## 💡 Intuition & Approach

### Approach
1. Handle edge cases (empty array, single element)
2. Compare characters at each position across all strings
3. Build the common prefix character by character

---

## 📊 Complexity Analysis

| Approach | Time | Space |
|----------|------|-------|
| Horizontal Scan | O(n × m) | O(1) |

---

## ✅ Test Cases

```
Input: strs = ["flower","flow","flight"]
Output: "fl"

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

---

## 🏆 Best Solution (JavaScript)

```javascript
var longestCommonPrefix = function(strs) {
    let str = "";
    if(strs.length == 0) return "";
    if(strs.length == 1) return strs[0];
    for(let j = 0; j < strs[0].length; j++){
        for(let i = 1; i < strs.length; i++){
            if(strs[i][j] != strs[i-1][j]){
                return str;
            }
        }
        str = str + strs[0][j];
    }
    return str;
};
```

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/longest-common-prefix/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>