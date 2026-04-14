# 🚀 LeetCode #2704 - To Be Or Not To Be

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-To%20Be%20Or%20Not%20To%20Be-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-April%202026-orange)

---

## 📝 Problem Statement

Write a function `expect` that takes a value `val` and returns an object with two methods:
- `toBe(other)`: returns `true` if `val === other`, otherwise throws an error
- `notToBe(other)`: returns `true` if `val !== other`, otherwise throws an error

---

## 💡 Intuition & Approach

### Approach
Return an object with methods that compare the captured value with the input and either return true or throw an error.

---

## 📊 Complexity Analysis

| Approach | Time | Space |
|----------|------|-------|
| Comparison | O(1) | O(1) |

---

## ✅ Test Cases

```
expect(5).toBe(5) // true
expect(5).notToBe(5) // throws "Equal"
```

---

## 🏆 Best Solution (JavaScript)

```javascript
var expect = function(val) {
    return {
        toBe: function(e) {
            if(val === e) {
                return true;
            }
            throw new Error("Not Equal");
        },
        notToBe: function(e) {
            if(val !== e) {
                return true;
            }
            throw new Error("Equal");
        }
    };
};
```

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/to-be-or-not-to-be/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>