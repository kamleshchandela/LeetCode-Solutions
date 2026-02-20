# 🚀 LeetCode #33 - Search in Rotated Sorted Array

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Problem](https://img.shields.io/badge/Problem-Search%20in%20Rotated%20Sorted%20Array-blue)
![Last Updated](https://img.shields.io/badge-Last%20Updated-April%202026-orange)

---

## 📝 Problem Statement

There is an integer array `nums` sorted in ascending order (with distinct values).

Prior to being passed to your function, `nums` is possibly rotated at an unknown pivot index `k` (`1 <= k < nums.length`) such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` (0-indexed).

Given the array `nums` after the possible rotation and an integer `target`, return the index of `target` if it is in `nums`, or `-1` if it is not in `nums`.

You must write an algorithm with `O(log n)` runtime complexity.

---

## 💡 Intuition & Approach

### Brute Force Approach
Linear scan through the array - O(n) time.

### Optimal Approach (Binary Search)
Since the array is sorted but rotated, we can use modified binary search. At each step, determine which half is sorted and whether the target lies in that half.

---

## 🎯 Key Insights

- The array is sorted but rotated - contains two sorted halves
- One half is always sorted - use this to decide which half to search
- Achieve O(log n) using binary search

---

## 📊 Complexity Analysis

| Approach | Time | Space |
|----------|------|-------|
| Linear Scan | O(n) | O(1) |
| Binary Search | O(log n) | O(1) |

---

## ✅ Test Cases

```
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Explanation: 0 is at index 4

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Input: nums = [1], target = 0
Output: -1
```

---

## 🏆 Best Solution (C++)

```cpp
class Solution {
public:
    int search(vector<int>& nums, int target) {
        for(int i = 0 ; i < nums.size() ; i++){
            if(nums[i] == target){
                return i ;
            }
        }
        return -1 ;
    }
};
```

**Stats:** ⚡ 0ms | 💾 15MB

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/search-in-rotated-sorted-array/)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>