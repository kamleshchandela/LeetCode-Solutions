# 🚀 LeetCode #3859 - Maximum Product of Two Digits

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)

---

## 📝 Problem Statement

Given an integer n, return the maximum product of two distinct digits of n.

---

## 🏆 Best Solution (JavaScript)

```javascript
var maxProduct = function(n) {
    var arr = []; 
    var count = 0; 
    while(n >= 1){
        arr[count] = n % 10;
        count++;
        n = parseInt(n / 10);
    }
    var max = -Infinity;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(max < (arr[i] * arr[j]) && i != j) {
                max = arr[i] * arr[j];
            }
        }
    }
    return max;
};
```

**Stats:** ⚡ 2ms | 💾 57.7MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/maximum-product-of-two-digits/)