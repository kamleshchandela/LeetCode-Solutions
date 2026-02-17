# 🚀 LeetCode #1406 - Subtract Product and Sum of Digits

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-Product%20vs%20Sum-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-February%202026-orange)

---

## 📝 Problem Statement

Given an integer `n`, return the difference between:
- **Product** of its digits
- **Sum** of its digits

Formula: `product_of_digits - sum_of_digits`

---

## 💡 Intuition & Approach

### Digit Extraction
Extract each digit using modulo and division:
- `digit = n % 10` → gets last digit
- `n = n / 10` → removes last digit

### Core Logic
```
product = 1
sum = 0
while n > 0:
    digit = n % 10
    product *= digit
    sum += digit
    n /= 10
return product - sum
```

---

## 🎯 Key Insights

- Single pass through digits
- Initialize product as 1 (multiplicative identity)
- Handle single-digit numbers correctly

---

## 📊 Complexity Analysis

| Metric | Value |
|--------|-------|
| Time | O(d) where d = number of digits |
| Space | O(1) |

---

## ✅ Test Cases

```
Input: n = 234
Output: 15
Product: 2 × 3 × 4 = 24
Sum: 2 + 3 + 4 = 9
Result: 24 - 9 = 15 ✓

Input: n = 4421
Output: 21
Product: 4 × 4 × 2 × 1 = 32
Sum: 4 + 4 + 2 + 1 = 11
Result: 32 - 11 = 21 ✓
```

---

## 🏆 Best Solution (JavaScript)

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    var mul = 1 ;
    var sum = 0 ;
    while (n>=1){
        var temp = n % 10 ;
        sum = sum + temp ;
        mul = mul * temp ;
        n = parseInt(n / 10) ;
    }
    return mul - sum ;
};
```

**Stats:** ⚡ 0ms | 💾 55.2MB

---

## 📈 Submission History

| Metric | Value |
|--------|-------|
| Total Submissions | 1 |
| Accepted | 1 |
| Best Runtime | 0ms (JS) |
| Best Memory | 55.2MB (JS) |

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>
