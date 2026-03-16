# 🚀 LeetCode #561 - Array Partition

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)

---

## 📝 Problem Statement

Given an integer array nums of 2n integers, pair them into n pairs (a1, b1), (a2, b2), ... (an, bn). Maximize the sum of min(ai, bi) for all i.

---

## 🏆 Best Solution (JavaScript)

```javascript
var arrayPairSum = function(nums) {
    for(let i = 0; i < nums.length; i++){
        let index = 0, max = -Infinity;
        for(let j = 0; j < nums.length - i; j++){
            if(max < nums[j]){ max = nums[j]; index = j; }
        }
        let temp = nums[index];
        nums[index] = nums[nums.length - 1 - i];
        nums[nums.length - 1 - i] = temp;
    }
    let sum = 0;
    for(let i = 0; i < nums.length; i = i + 2){
        sum = sum + Math.min(nums[i], nums[i+1]);
    }
    return sum;
};
```

**Stats:** ⚡ 1320ms | 💾 59MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/array-partition/)