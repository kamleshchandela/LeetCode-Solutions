# 🚀 LeetCode #412 - Fizz Buzz

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)

---

## 📝 Problem Statement

Given integer n, return a string array where: "Fizz" for multiples of 3, "Buzz" for multiples of 5, "FizzBuzz" for multiples of both, otherwise the number as string.

---

## 🏆 Best Solution (JavaScript)

```javascript
var fizzBuzz = function(n) {
    var arr = [];
    for(let i = 0; i < n; i++){
        if((i + 1) % 3 == 0 && (i + 1) % 5 == 0) arr[i] = "FizzBuzz";
        else if((i + 1) % 3 == 0) arr[i] = "Fizz";
        else if((i + 1) % 5 == 0) arr[i] = "Buzz";
        else arr[i] = `${i + 1}`;
    }
    return arr;
};
```

**Stats:** ⚡ 0ms | 💾 58.6MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/fizz-buzz/)