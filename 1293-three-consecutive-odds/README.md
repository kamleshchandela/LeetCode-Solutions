# 🚀 LeetCode #1293 - Three Consecutive Odds

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-Three%20Odds-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-February%202026-orange)

---

## 📝 Problem Statement

Given an integer array `arr`, return `true` if there are **three consecutive odd numbers** in the array. Otherwise, return `false`.

---

## 💡 Intuition & Approach

### Sliding Window Check
Check each triplet of consecutive elements:
- An odd number is `num % 2 == 1`
- Check if `arr[i]`, `arr[i+1]`, and `arr[i+2]` are all odd

### Core Logic
```
for i in range(arr.length - 2):
    if arr[i] % 2 == 1 and arr[i+1] % 2 == 1 and arr[i+2] % 2 == 1:
        return true
return false
```

---

## 🎯 Key Insights

- Need to check three consecutive elements
- A number is odd if it's not divisible by 2
- Early return on first match

---

## 📊 Complexity Analysis

| Metric | Value |
|--------|-------|
| Time | O(n) |
| Space | O(1) |

---

## ✅ Test Cases

```
Input: arr = [2,6,4,1]
Output: false
No three consecutive odds ✓

Input: arr = [1,2,34,3,4,5,7,23,12]
Output: true
[5,7,23] are three consecutive odds ✓
```

---

## 🏆 Best Solution (JavaScript)

```javascript
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] % 2 == 1 && arr[i + 1] % 2 == 1 && arr[i + 2] % 2 == 1){
            return true;
        }
    }
    return false ;
};
```

**Stats:** ⚡ 0ms | 💾 53.9MB

---

## 📈 Submission History

| Metric | Value |
|--------|-------|
| Total Submissions | 1 |
| Accepted | 1 |
| Best Runtime | 0ms (JS) |
| Best Memory | 53.9MB (JS) |

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/three-consecutive-odds/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>
