# 🚀 LeetCode #628 - Maximum Product of Three Numbers

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)

---

## 📝 Problem Statement

Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

---

## 🏆 Best Solution (JavaScript)

```javascript
var maximumProduct = function(nums) {
    let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;
    let min1 = Infinity, min2 = Infinity;
    for(let i = 0; i < nums.length; i++){
        if(max1 < nums[i]){ max3 = max2; max2 = max1; max1 = nums[i]; }
        else if(max2 < nums[i]){ max3 = max2; max2 = nums[i]; }
        else if(max3 < nums[i]) max3 = nums[i];
        if(min1 > nums[i]){ min2 = min1; min1 = nums[i]; }
        else if(min2 > nums[i]) min2 = nums[i];
    }
    return Math.max(max1 * max2 * max3, min1 * min2 * max1);
};
```

**Stats:** ⚡ 1ms | 💾 58.9MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/maximum-product-of-three-numbers/)