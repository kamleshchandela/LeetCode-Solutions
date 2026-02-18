# 🚀 LeetCode #70 - Climbing Stairs

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)

---

## 📝 Problem Statement

You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

---

## 🏆 Best Solution (JavaScript)

```javascript
var climbStairs = function(n) {
    var f1 = 0, f2 = 1, f3 = 0;
    for(let i = 0; i < n; i++){
        f3 = f1 + f2;
        f1 = f2;
        f2 = f3;
    }
    return f3;
};
```

**Stats:** ⚡ 0ms | 💾 54MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/climbing-stairs/)