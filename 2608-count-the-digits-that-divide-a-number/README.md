# 🚀 LeetCode #2608 - Count the Digits That Divide a Number

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-Count%20Digits-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-February%202026-orange)

---

## 📝 Problem Statement

Given an integer `num`, return the **count of digits in `num` that divide `num`**.

An integer `val` **divides** `num` if `num % val == 0`.

---

## 💡 Intuition & Approach

### Digit Extraction & Check
For each digit in the number:
1. Extract the digit using modulo 10
2. Check if `num % digit == 0`
3. Count how many digits divide the number

### Core Logic
```
while num > 0:
    digit = num % 10
    if originalNum % digit == 0:
        count++
    num = num / 10
```

---

## 🎯 Key Insights

- A digit divides the number if the number is divisible by that digit
- Need to preserve original number for repeated division checks
- Digit 0 is never present (per constraints)

---

## 📊 Complexity Analysis

| Metric | Value |
|--------|-------|
| Time | O(d) where d = number of digits |
| Space | O(1) |

---

## ✅ Test Cases

```
Input: num = 7
Output: 1
Explanation: 7 divides itself ✓

Input: num = 121
Output: 2
Explanation: Digits are [1,2,1]. 1 divides 121 twice, 2 doesn't → 2

Input: num = 1248
Output: 4
Explanation: 1,2,4,8 all divide 1248 ✓
```

---

## 🏆 Best Solution (JavaScript)

```javascript
/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    var n = num ;
    var count = 0 ;
    while (n >= 1){
        var temp = n % 10 ;
        if(num % temp == 0){
            count ++ ;
        }
        n = parseInt(n / 10) ;
    }
    return count ;
};
```

**Stats:** ⚡ 0ms | 💾 55MB

---

## 📈 Submission History

| Metric | Value |
|--------|-------|
| Total Submissions | 1 |
| Accepted | 1 |
| Best Runtime | 0ms (JS) |
| Best Memory | 55MB (JS) |

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/count-the-digits-that-divide-a-number/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>
