# 🚀 LeetCode #1548 - Check If All 1's Are at Least Length K Places Away

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-K%20Places%20Away-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-February%202026-orange)

---

## 📝 Problem Statement

Given a binary array `nums` and an integer `k`, return `true` if all `1`s are at least `k` places away from each other, otherwise return `false`.

---

## 💡 Intuition & Approach

### Sliding Window Check
For each `1` found, check if any other `1` is within `k` distance:
- If another `1` found within k positions → return false
- Continue checking all positions
- Return true if no violations

### Core Logic
```
for each index i:
    if nums[i] == 1:
        check positions i+1 to min(i+k, n-1)
        if any 1 found, return false
return true
```

---

## 🎯 Key Insights

- Need to ensure minimum distance of k between all 1s
- Simple sliding window approach
- Early termination on violation

---

## 📊 Complexity Analysis

| Metric | Value |
|--------|-------|
| Time | O(n × k) |
| Space | O(1) |

---

## ✅ Test Cases

```
Input: nums = [1,0,0,0,1,0,0,1], k = 2
Output: true
1s at positions 0, 4, 7 - all at least 2 apart ✓

Input: nums = [1,0,0,1,0,1], k = 2
Output: false
1s at positions 0 and 3 are only 2 apart (violation) ✓
```

---

## 🏆 Best Solution (JavaScript)

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] == 1){
            for(let j = i + 1 ; j <= i + k && j < nums.length ; j++){
                if(nums[j] == 1){
                    return false ;
                }
            }
        }
    }
    return true ;
};
```

**Stats:** ⚡ 1ms | 💾 58.5MB

---

## 📈 Submission History

| Metric | Value |
|--------|-------|
| Total Submissions | 4 |
| Accepted | 3 |
| Best Runtime | 0ms (C++) |
| Best Memory | 61.5MB (C++) |

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>
