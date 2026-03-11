# 🚀 LeetCode #397 - Integer Replacement

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)

---

## 📝 Problem Statement

Given an integer n, you can perform operations: if n is even, n/2; if n is odd, either n+1 or n-1. Return the minimum steps to reduce n to 0.

---

## 🏆 Best Solution (JavaScript)

```javascript
var integerReplacement = function(n) {
    let count = 0;
    while(n > 1){
        if(n % 2 == 0) n = n / 2;
        else {
            if(n == 3 || n % 4 == 1) n = n - 1;
            else n = n + 1;
        }
        count++;
    }
    return count;
};
```

**Stats:** ⚡ 0ms | 💾 53.9MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/integer-replacement/)