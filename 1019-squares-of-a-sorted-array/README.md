# 🚀 LeetCode #1019 - Squares of a Sorted Array

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-Sorted%20Squares-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-February%202026-orange)

---

## 📝 Problem Statement

Given an integer array `nums` **sorted in non-decreasing order**, return an array of the **squares of each number**, also sorted in non-decreasing order.

---

## 💡 Intuition & Approach

### Optimal: Two-Pointer Technique
Since the array is sorted and contains negative numbers:
- Largest squares come from either end (most negative or most positive)
- Use two pointers from both ends and merge

### Brute Force Approach (Used)
1. Square each element
2. Sort the squared array

### Core Logic
```
Step 1: Square all elements
Step 2: Sort the result
```

---

## 🎯 Key Insights

- Negative numbers have large squares
- Sorted array means largest values at both ends
- Two-pointer is O(n) optimal, but O(n log n) works too

---

## 📊 Complexity Analysis

| Metric | Value |
|--------|-------|
| Time | O(n log n) |
| Space | O(1) |

---

## ✅ Test Cases

```
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
After squaring: [16,1,0,9,100]
After sorting: [0,1,9,16,100] ✓

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121] ✓
```

---

## 🏆 Best Solution (JavaScript)

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    for(let i = 0 ; i < nums.length ; i++){
        nums[i] = nums[i] ** 2 ;
    }
    for(let i = 0 ; i < nums.length ; i++){
        var max = -Infinity ;
        var index = 0 ;
        for(let j = 0 ; j < nums.length - i ; j++ ){
            if(max < nums[j]){
                max = nums[j] ;
                index = j ;
            }
        }
        var temp = nums[index] ;
        nums[index] = nums[nums.length - i - 1] ;
        nums[nums.length - i - 1] = temp ;
    }
    return nums ;
};
```

**Stats:** ⚡ 299ms | 💾 61.2MB

---

## 📈 Submission History

| Metric | Value |
|--------|-------|
| Total Submissions | 4 |
| Accepted | 4 |
| Best Runtime | 299ms (JS) |
| Best Memory | 61.2MB (JS) |

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/squares-of-a-sorted-array/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>
