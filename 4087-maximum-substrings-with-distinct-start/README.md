# 🚀 LeetCode #4087 - Maximum Substrings With Distinct Start

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)

---

## 📝 Problem Statement

Return the number of distinct characters in string s (count of unique characters).

---

## 🏆 Best Solution (JavaScript)

```javascript
var maxDistinct = function(s) {
    var obj = {}, count = 0;
    for(let i = 0; i < s.length; i++){
        if(!obj[s[i]]){
            obj[s[i]] = 1;
            count++;
        }
    }
    return count;
};
```

**Stats:** ⚡ 45ms | 💾 65.2MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/maximum-substrings-with-distinct-start/)