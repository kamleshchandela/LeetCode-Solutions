# 🚀 LeetCode #2665 - Counter II

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-Counter%20II-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-April%202026-orange)

---

## 📝 Problem Statement

Write a function `createCounter` that takes an integer `init` and returns an object with three methods:
- `increment()`: increases the current value by 1 and returns it
- `decrement()`: reduces the current value by 1 and returns it
- `reset()`: resets the current value to `init` and returns it

---

## 💡 Intuition & Approach

### Approach
Use a closure to capture the initial value and return an object with methods that manipulate the captured value.

---

## 📊 Complexity Analysis

| Approach | Time | Space |
|----------|------|-------|
| Closure | O(1) | O(1) |

---

## ✅ Test Cases

```
Input: init = 5
const counter = createCounter(5)
counter.increment() // 6
counter.reset() // 5
counter.decrement() // 4
```

---

## 🏆 Best Solution (JavaScript)

```javascript
var createCounter = function(init) {
    let n = init;
    return {
        increment: function() {
            return ++n;
        },
        reset: function() {
            n = init;
            return n;
        },
        decrement: function() {
            return --n;
        }
    };
};
```

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/counter-ii/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>