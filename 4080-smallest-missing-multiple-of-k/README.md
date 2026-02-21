# 🚀 LeetCode #4080 - Smallest Missing Multiple of K

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)

---

## 📝 Problem Statement

Given an array nums and integer k, find the smallest multiple of k that is not present in nums.

---

## 🏆 Best Solution (JavaScript)

```javascript
var missingMultiple = function(nums, k) {
    if(nums.length == 1){
        if(k == 1) return 1;
        else if(k == nums[0]) return k * 2;
        else return k;
    }
    for(let i = 1; i <= nums.length; i++){
        var check = true;
        for(let j = 0; j < nums.length; j++){
            if(nums[j] == k * i){ check = false; break; }
        }
        if(check) return k * i;
    }
    return k * (nums.length + 1);
};
```

**Stats:** ⚡ 0ms | 💾 55.9MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/smallest-missing-multiple-of-k/)