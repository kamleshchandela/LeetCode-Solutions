# 🚀 LeetCode #4168 - Mirror Distance of an Integer

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)

---

## 📝 Problem Statement

Given an integer n, return the absolute difference between n and its reverse.

---

## 🏆 Best Solution (JavaScript)

```javascript
var mirrorDistance = function(n) {
    var num = n, temp = 0;
    while(num >= 1){
        temp = temp * 10 + num % 10;
        num = parseInt(num / 10);
    }
    var a = temp - n;
    if(temp - n > 0) return a;
    return a * (-1);
};
```

**Stats:** ⚡ 1ms | 💾 55.8MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/mirror-distance-of-an-integer/)