# 🚀 LeetCode #342 - Power of Four

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-Power%20of%20Four-blue)
![Last Updated](https://img.shields.io/badge-Last%20Updated-April%202026-orange)

---

## 📝 Problem Statement

Given an integer `n`, return `true` if it is a power of four. Otherwise, return `false`.

An integer `n` is a power of four, if there exists an integer `x` such that `n == 4^x`.

---

## 💡 Intuition & Approach

Check if n is a power of four by iterating through powers of 4 until we exceed n or find a match.

---

## 🏆 Best Solution (JavaScript)

```javascript
var isPowerOfFour = function(n) {
    for(let i = 0 ; i < 4 ** 31 ; i ++){
        if(n == 4 ** i){
            return true ;
        }
        if(4 ** i > n){
            return false ;
        }
    }
};
```

**Stats:** ⚡ 0ms | 💾 55.4MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/power-of-four/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>