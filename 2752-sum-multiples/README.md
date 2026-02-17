# 🚀 LeetCode #2752 - Sum Multiples

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-Sum%20Multiples-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-February%202026-orange)

---

## 📝 Problem Statement

Given a positive integer `n`, find the sum of all integers in the range `[1, n]` that are divisible by `3`, `5`, or `7`.

---

## 💡 Intuition & Approach

### Simple Linear Scan
Check each number from 1 to n:
- If divisible by 3, 5, or 7 → add to sum
- Use OR condition for divisibility check

### Core Logic
```
sum = 0
for i in 1..n:
    if i % 3 == 0 || i % 5 == 0 || i % 7 == 0:
        sum += i
return sum
```

---

## 🎯 Key Insights

- Divisible by **any** of the three numbers (OR condition)
- Simple modulo operation
- O(n) solution is fast enough for constraints (n ≤ 1000)

---

## 📊 Complexity Analysis

| Metric | Value |
|--------|-------|
| Time | O(n) |
| Space | O(1) |

---

## ✅ Test Cases

```
Input: n = 7
Output: 21
Multiples: 3 + 5 + 6 + 7 = 21 ✓

Input: n = 10
Output: 40
Multiples: 3 + 5 + 6 + 7 + 9 + 10 = 40 ✓

Input: n = 9
Output: 30
Multiples: 3 + 5 + 6 + 7 + 9 = 30 ✓
```

---

## 🏆 Best Solution (JavaScript)

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    var sum = 0 ;
    for(let i = 1 ; i <= n ; i++){
        if(i % 3 == 0 || i % 5 == 0 || i % 7 == 0){
            sum = sum + i ;
        }
    }
    return sum ; 
};
```

**Stats:** ⚡ 2ms | 💾 56.8MB

---

## 📈 Submission History

| Metric | Value |
|--------|-------|
| Total Submissions | 1 |
| Accepted | 1 |
| Best Runtime | 2ms (JS) |
| Best Memory | 56.8MB (JS) |

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/sum-multiples/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>
