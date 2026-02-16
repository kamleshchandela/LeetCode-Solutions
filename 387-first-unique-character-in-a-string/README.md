# 🚀 LeetCode #387 - First Unique Character in a String

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)

---

## 📝 Problem Statement

Given a string s, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

---

## 🏆 Best Solution (JavaScript)

```javascript
var firstUniqChar = function(s) {
    var obj = {};
    if(s.length == 1) return 0;
    for(let i = 0; i < s.length; i++){
        if(!obj[s[i]]) obj[s[i]] = 1;
        else obj[s[i]] += 1;
    }
    for(let i = 0; i < s.length; i++){
        if(obj[s[i]] == 1) return i;
    }
    return -1;
};
```

**Stats:** ⚡ 37ms | 💾 59.3MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/first-unique-character-in-a-string/)