# 🚀 LeetCode #4058 - Compute Alternating Sum

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)

---

## 📝 Problem Statement

Given an array nums, compute the alternating sum where even-indexed elements are added and odd-indexed elements are subtracted.

---

## 🏆 Best Solution (JavaScript)

```javascript
var alternatingSum = function(nums) {
    var sum = 0;
    for(let i = 0; i < nums.length; i++){
        if(i % 2 == 0) sum = sum + nums[i];
        else sum = sum - nums[i];
    }
    return sum;
};
```

**Stats:** ⚡ 0ms | 💾 57.3MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/compute-alternating-sum/)