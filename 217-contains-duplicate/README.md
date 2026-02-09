# 🚀 LeetCode #217 - Contains Duplicate

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-Contains%20Duplicate-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-February%202026-orange)

---

## 📝 Problem Statement

Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

---

## 💡 Intuition & Approach

### Hash Set/Dictionary Approach
Use an object to track seen numbers:
- If a number is already in the object → duplicate found
- Otherwise, add it to the object

### Core Logic
```
For each number in array:
  1. Check if it's already seen
  2. If yes, return true
  3. If no, add to seen set
  4. Return false if no duplicates
```

---

## 🎯 Key Insights

- **Early termination**: Can exit as soon as duplicate is found
- **Hash lookup**: O(1) average time per lookup
- **Trade-off**: Using extra space for faster lookups

---

## 📊 Complexity Analysis

| Metric | Value |
|--------|-------|
| Time | O(n) |
| Space | O(n) |

---

## ✅ Test Cases

```
Input: nums = [1,2,3,1]
Output: true
Explanation: 1 appears twice ✓

Input: nums = [1,2,3,4]
Output: false
Explanation: All elements are unique ✓

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
Explanation: Multiple duplicates exist ✓
```

---

## 🏆 Best Solution (JavaScript)

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var obj = {} ;
    for(let i = 0 ; i< nums.length ; i++){
        if(obj[nums[i]] == nums[i]){
            return true ;
        }
        if(!obj[nums[i]]){
            obj[nums[i]] = nums[i] ;
        }
    }
    return false ;
};
```

**Stats:** ⚡ 40ms | 💾 77.9MB

---

## 📈 Submission History

| Metric | Value |
|--------|-------|
| Total Submissions | 5 |
| Accepted | 4 |
| Best Runtime | 40ms (JS) |
| Best Memory | 77.1MB (JS) |

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/contains-duplicate/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>
