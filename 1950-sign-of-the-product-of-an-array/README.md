# 🚀 LeetCode #1950 - Sign of the Product of an Array

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-Array%20Sign-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-February%202026-orange)

---

## 📝 Problem Statement

Implement `signFunc(x)` that returns:
- `1` if `x` is positive
- `-1` if `x` is negative
- `0` if `x` equals zero

Given an array `nums`, return `signFunc(product)` where product is the product of all values.

---

## 💡 Intuition & Approach

### Sign Determination
The sign of a product depends on:
- **Positive count of negatives**: Even → positive, Odd → negative
- **Any zero**: Product is zero

### Core Logic
```
product = 1
for num in nums:
    product *= num

if product > 0: return 1
if product < 0: return -1
return 0
```

---

## 🎯 Key Insights

- Can compute full product (careful with overflow)
- Alternative: Count negative numbers only
- Any zero immediately makes product zero

---

## 📊 Complexity Analysis

| Metric | Value |
|--------|-------|
| Time | O(n) |
| Space | O(1) |

---

## ✅ Test Cases

```
Input: nums = [-1,-2,-3,-4,3,2,1]
Output: 1
Product is positive ✓

Input: nums = [1,5,0,2,-3]
Output: 0
Contains zero ✓

Input: nums = [-1,1,-1,1,-1]
Output: -1
4 negatives (odd) → negative product ✓
```

---

## 🏆 Best Solution (JavaScript)

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    var mul = 1 ;
    for(let i = 0 ; i < nums.length ; i++){
        mul = mul * nums[i] ; 
    }
    if(mul > 0){
        return 1 ; 
    }
    else if (mul < 0){
        return -1 ; 
    }
    else {
        return 0 ; 
    }
};
```

**Stats:** ⚡ 0ms | 💾 54.5MB

---

## 📈 Submission History

| Metric | Value |
|--------|-------|
| Total Submissions | 1 |
| Accepted | 1 |
| Best Runtime | 0ms (JS) |
| Best Memory | 54.5MB (JS) |

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/sign-of-the-product-of-an-array/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>
