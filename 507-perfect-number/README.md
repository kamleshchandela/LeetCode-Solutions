# 🚀 LeetCode #507 - Perfect Number

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)

---

## 📝 Problem Statement

Given an integer num, return true if it is a perfect number (equal to sum of its proper divisors excluding itself).

---

## 🏆 Best Solution (JavaScript)

```javascript
var checkPerfectNumber = function(num) {
    let sum = 0;
    for(let i = 1; i <= num / 2; i++){
        if(num % i == 0) sum = sum + i;
    }
    return sum == num;
};
```

**Stats:** ⚡ 1043ms | 💾 53.9MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/perfect-number/)