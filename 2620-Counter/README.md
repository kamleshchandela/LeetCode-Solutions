# 🚀 LeetCode #2620 - Counter

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-Counter-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-April%202026-orange)

---

## 📝 Problem Statement

Given an integer `n`, write a function `createCounter` that returns a function that increments and returns `n` each time it is called.

---

## 💡 Intuition & Approach

### Approach
Use a closure to capture the initial value `n` and return a function that increments and returns the captured value.

---

## 📊 Complexity Analysis

| Approach | Time | Space |
|----------|------|-------|
| Closure | O(1) | O(1) |

---

## ✅ Test Cases

```
Input: n = 10
const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12
```

---

## 🏆 Best Solution (JavaScript)

```javascript
var createCounter = function(n) {
    return function() {
        return n++;
    };
};
```

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/counter/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>