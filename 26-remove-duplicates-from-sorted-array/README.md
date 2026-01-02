# 🚀 LeetCode #26 - Remove Duplicates from Sorted Array

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-Remove%20Duplicates-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-January%202026-orange)

---

## 📝 Problem Statement

Given an integer array `nums` sorted in **non-decreasing order**, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Return the **number of unique elements** in `nums`.

---

## 💡 Intuition & Approach

### In-Place Removal
Since the array is sorted, duplicates will be adjacent. We can use two pointers:
- One to track the position for unique elements
- One to scan through the array

### Core Logic
1. Compare current element with next element
2. If different, keep it; if same, remove it
3. Continue until end of array

---

## 🎯 Key Insights

- **Sorted array guarantee**: Duplicates are always adjacent
- **In-place modification**: No extra array needed
- **O(n) time**: Single pass through the array

---

## 📊 Complexity Analysis

| Metric | Value |
|--------|-------|
| Time | O(n) |
| Space | O(1) |

---

## ✅ Test Cases

```
Input: nums = [1,1,2]
Output: 2
Array becomes: [1,2,_]

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5
Array becomes: [0,1,2,3,4,_,_,_,_,_]
```

---

## 🏆 Best Solution (JavaScript)

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    for(let j = 0 ; j < nums.length ; j++){
        if(nums[j] != nums[j+1]){
            i++;
        }
        else{
            nums.splice(i , 1) ;
            j -- ;
        }
    }
    return i ;
};
```

**Stats:** ⚡ 58ms | 💾 58.4MB

---

## 📈 Submission History

| Metric | Value |
|--------|-------|
| Total Submissions | 2 |
| Accepted | 1 |
| Best Runtime | 58ms (JS) |
| Best Memory | 58.4MB (JS) |

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>
