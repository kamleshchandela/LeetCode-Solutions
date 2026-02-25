# 🚀 LeetCode #3918 - Check Divisibility by Digit Sum and Product

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)

---

## 📝 Problem Statement

Given an integer n, return true if n is divisible by the sum of its digits and the product of its digits.

---

## 🏆 Best Solution (JavaScript)

```javascript
var checkDivisibility = function(n) {
    var sum = 0, mul = 1, num = n;
    while(num >= 1){
        sum = sum + num % 10;
        mul = mul * (num % 10);
        num = parseInt(num / 10);
    }
    if(n % (sum + mul) == 0) return true;
    return false;
};
```

**Stats:** ⚡ 0ms | 💾 53MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/check-divisibility-by-digit-sum-and-product/)