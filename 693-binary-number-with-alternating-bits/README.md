# 🚀 LeetCode #693 - Binary Number with Alternating Bits

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)

---

## 📝 Problem Statement

Given an integer n, return true if its binary representation has alternating bits (no two adjacent bits are the same).

---

## 🏆 Best Solution (JavaScript)

```javascript
var hasAlternatingBits = function(n) {
    var binary = n.toString(2);
    for(let i = 0; i < binary.length; i++){
        if(binary[i] == binary[i + 1] && i < binary.length - 1) return false;
    }
    return true;
};
```

**Stats:** ⚡ 0ms | 💾 53.6MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/binary-number-with-alternating-bits/)