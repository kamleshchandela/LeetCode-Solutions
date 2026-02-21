# 🚀 LeetCode #3830 - Find Closest Person

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)

---

## 📝 Problem Statement

Given three integers x, y, and z, return which one is closest to z.

---

## 🏆 Best Solution (JavaScript)

```javascript
var findClosest = function(x, y, z) {
    var a = x - z, b = y - z;
    if(a < 0) a = -a;
    if(b < 0) b = -b;
    if(a < b) return 1;
    else if(a > b) return 2;
    else return 0;
};
```

**Stats:** ⚡ 1ms | 💾 55.5MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/find-closest-person/)