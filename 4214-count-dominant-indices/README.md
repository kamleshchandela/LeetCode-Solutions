# 🚀 LeetCode #4214 - Count Dominant Indices

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)

---

## 📝 Problem Statement

Given an array nums, count the number of dominant indices where the element is greater than the sum of all elements to its right.

---

## 🏆 Best Solution (JavaScript)

```javascript
var dominantIndices = function(nums) {
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        let sum = 0;
        for(let j = i + 1; j < nums.length; j++) sum = sum + nums[j];
        if(nums[i] * (nums.length - 1 - i) > sum) count++;
    }
    return count;
};
```

**Stats:** ⚡ 2ms | 💾 55.7MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/count-dominant-indices/)