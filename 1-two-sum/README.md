# 🚀 LeetCode #1 - Two Sum

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Problem](https://img.shields.io/badge/Problem-Two%20Sum-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-April%202026-orange)

---

## 📝 Problem Statement

Given an array of integers `nums` and an integer `target`, return the **indices** of the two numbers such that they add up to `target`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

---

## 💡 Intuition & Approach

### Brute Force Approach
Check every pair of elements to find two that sum to target. While simple, this is inefficient for large inputs.

### Optimal Approach (Hash Map) 
Use a hash map to store seen numbers and their indices. For each element, check if `target - element` exists in the map.

---

## 🎯 Key Insights

- Only one valid answer exists per problem
- We can achieve **O(n)** time complexity using a hash map
- Space-Time Tradeoff: Use extra space for faster lookups

---

## 📊 Complexity Analysis

| Approach | Time | Space |
|----------|------|-------|
| Brute Force | O(n²) | O(1) |
| Hash Map | O(n) | O(n) |

---

## ✅ Test Cases

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: nums[0] + nums[1] = 2 + 7 = 9 ✓

Input: nums = [3,2,4], target = 6
Output: [1,2]
Explanation: nums[1] + nums[2] = 2 + 4 = 6 ✓

Input: nums = [3,3], target = 6
Output: [0,1]
Explanation: nums[0] + nums[1] = 3 + 3 = 6 ✓
```

---

## 🏆 Best Solution (JavaScript)

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var arr = [] ;
    var check = 0 ;
    for(let i = 0 ; i < nums.length ; i++){
        for(let j = 0 ; j < nums.length ; j++){
            if(nums[i]+nums[j]==target && i != j){
                arr.push(i);
                arr.push(j);
                check = 1 ;
                break ;
            }
        }

        if(check){
            break ;
        }
    }

    return arr ;
};
```

**Stats:** ⚡ 86ms | 💾 54.5MB

---

## 📈 Submission History

| Metric | Value |
|--------|-------|
| Total Submissions | 22 |
| Accepted | 16 |
| Best Runtime | 86ms (JS) |
| Best Memory | 14MB (C++) |

---

## 🔗 Links

- [LeetCode Problem](https://leetcode.com/problems/two-sum/)
- [Solution Explanation](#)

---

<p align="center">
  <sub>Made with ❤️ | LeetCode Solutions</sub>
</p>
