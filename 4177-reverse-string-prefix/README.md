# 🚀 LeetCode #4177 - Reverse String Prefix

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)

---

## 📝 Problem Statement

Given string s and integer k, reverse the prefix of s up to index k-1.

---

## 🏆 Best Solution (JavaScript)

```javascript
var reversePrefix = function(s, k) {
    var str = "";
    for(let i = k - 1; i >= 0; i--) str = str + s[i];
    for(let i = k; i < s.length; i++) str = str + s[i];
    return str;
};
```

**Stats:** ⚡ 1ms | 💾 56.2MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/reverse-string-prefix/)