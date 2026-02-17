# 🚀 LeetCode #3172 - Divisible and Non-divisible Sums Difference

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-Sums%20Difference-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-February%202026-orange)

---

## 📝 Problem Statement

Given positive integers `n` and `m`:
- `num1`: Sum of integers in `[1, n]` **NOT divisible** by `m`
- `num2`: Sum of integers in `[1, n]` **divisible** by `m`

Return `num1 - num2`

---

## 💡 Intuition & Approach

### Single Pass Categorization
Traverse numbers from 1 to n and categorize:
- If divisible by m → add to num2
- Otherwise → add to num1

### Core Logic
```
for i = 1 to n:
    if i % m == 0:  num2 += i
    else:           num1 += i
return num1 - num2
```

---

## 🎯 Key Insights

- One pass through 1..n
- Simple modulo check for divisibility
- O(n) is efficient for n ≤ 1000

---

## 📊 Complexity Analysis

| Metric | Value |
|--------|-------|
| Time | O(n) |
| Space | O(1) |

---

## ✅ Test Cases

```
Input: n = 10, m = 3
Output: 19
Non-divisible: 1+2+4+5+7+8+10 = 37
Divisible: 3+6+9 = 18
Result: 37 - 18 = 19 ✓

Input: n = 5, m = 6
Output: 15
Non-divisible: 1+2+3+4+5 = 15
Divisible: 0
Result: 15 ✓

Input: n = 5, m = 1
Output: -15
All numbers divisible, so num1=0, num2=15
Result: 0 - 15 = -15 ✓
```

---

## 🏆 Best Solution (JavaScript)

```javascript
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    var sum1 = 0 ;
    var sum2 = 0 ;
    for (let i = 1 ; i <= n ; i++){
        if(i % m != 0){
            sum1 = sum1 + i ;
        }
        else{
            sum2 = sum2 + i ;
        }
    }
    return sum1 - sum2 ;
};
```

**Stats:** ⚡ 1ms | 💾 55.8MB

---

## 📈 Submission History

| Metric | Value |
|--------|-------|
| Total Submissions | 1 |
| Accepted | 1 |
| Best Runtime | 1ms (JS) |
| Best Memory | 55.8MB (JS) |

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>
