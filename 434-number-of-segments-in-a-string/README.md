# 🚀 LeetCode #434 - Number of Segments in a String

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)

---

## 📝 Problem Statement

Count the number of segments in a string. A segment is a maximal consecutive group of non-space characters.

---

## 🏆 Best Solution (JavaScript)

```javascript
var countSegments = function(s) {
    var count = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] != " " && i == 0) count++;
        else if(s[i] == " " && s[i + 1] != " " && i + 1 != s.length) count++;
    }
    return count;
};
```

**Stats:** ⚡ 0ms | 💾 54.9MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/number-of-segments-in-a-string/)