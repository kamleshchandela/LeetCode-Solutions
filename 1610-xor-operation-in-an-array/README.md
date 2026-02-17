# 🚀 LeetCode #1610 - XOR Operation in an Array

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-XOR%20Operation-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-February%202026-orange)

---

## 📝 Problem Statement

Given an integer `n` and an integer `start`:
- Build an array `nums` where `nums[i] = start + 2 * i`
- Return the **bitwise XOR** of all elements in `nums`

---

## 💡 Intuition & Approach

### Bitwise XOR Operation
XOR (^) has special properties:
- `a ^ a = 0` (same values cancel out)
- `a ^ 0 = a`
- XOR is associative and commutative

### Core Logic
```
nums[i] = start + 2*i  for i = 0 to n-1
result = nums[0] ^ nums[1] ^ ... ^ nums[n-1]
```

---

## 🎯 Key Insights

- XOR all numbers together
- Can build array first, then XOR
- Or XOR on-the-fly without storing array

---

## 📊 Complexity Analysis

| Metric | Value |
|--------|-------|
| Time | O(n) |
| Space | O(1) |

---

## ✅ Test Cases

```
Input: n = 5, start = 0
Output: 8
Array: [0,2,4,6,8]
XOR: 0 ^ 2 ^ 4 ^ 6 ^ 8 = 8 ✓

Input: n = 4, start = 3
Output: 8
Array: [3,5,7,9]
XOR: 3 ^ 5 ^ 7 ^ 9 = 8 ✓
```

---

## 🏆 Best Solution (JavaScript)

```javascript
/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    var arr = [] ;
    for(let i = 0 ; i < n ; i++){
        arr[i] = start + 2 * i ;
    }
    var ans = 0 ;
    for(let i = 0 ; i < arr.length ; i++){
        ans = ans ^ arr[i] ;
    }
    return ans ;
};
```

**Stats:** ⚡ 0ms | 💾 54.6MB

---

## 📈 Submission History

| Metric | Value |
|--------|-------|
| Total Submissions | 1 |
| Accepted | 1 |
| Best Runtime | 0ms (JS) |
| Best Memory | 54.6MB (JS) |

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/xor-operation-in-an-array/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>
