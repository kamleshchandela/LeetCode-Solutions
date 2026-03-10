# 🚀 LeetCode #3914 - Check if Any Element Has Prime Frequency

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)

---

## 📝 Problem Statement

Given an integer array nums, return true if there exists an element whose frequency is a prime number.

---

## 🏆 Best Solution (JavaScript)

```javascript
var checkPrimeFrequency = function(nums) {
    for(let i = 0; i < nums.length; i++){
        let count = 0; 
        for(let j = 0; j < nums.length; j++){
            if(nums[i] == nums[j]) count++;
        }
        let check = true;
        for(let j = 2; j < count; j++){
            if(count % j == 0){ check = false; break; }
        }
        if(check && count > 1) return true;
    }
    return false;
};
```

**Stats:** ⚡ 1ms | 💾 55.7MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/check-if-any-element-has-prime-frequency/)