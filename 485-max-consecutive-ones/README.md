# 🚀 LeetCode #485 - Max Consecutive Ones

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)

---

## 📝 Problem Statement

Given a binary array nums, return the maximum number of consecutive 1's.

---

## 🏆 Best Solution (JavaScript)

```javascript
var findMaxConsecutiveOnes = function(nums) {
    let count = 0, max = 0;
    if(nums === [0]) return 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 1){
            count++;
            if(max < count) max = count;
        } else count = 0;
    }
    return max;
};
```

**Stats:** ⚡ 2ms | 💾 60.2MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/max-consecutive-ones/)